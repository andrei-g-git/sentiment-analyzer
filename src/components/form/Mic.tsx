import { Dispatch } from 'react';
import { connect } from 'react-redux';
import {
    recording
} from '../../redux/actions';
import {useSpeech} from "./micHooks";
import "./Mic.scss";

export const Mic = (props: any) => {

    useSpeech(props.isRecording);

    return (
        <div className={getMicClass(props.isRecording)} 
            onClick={() => props.toggleMic(!props.isRecording)}
            tabIndex={-1} //for click, :active is for mouse-down... --- not using anymore
        >
            <div className={getWaveClass(props.isRecording)}></div>
        </div>
    );
};

const getMicClass = (isRecording: boolean): string => { //no idea why ternary expressions don't work...
    if(isRecording) return "red-mic";
    return "black-mic";
};
const getWaveClass = (isRecording: boolean): string => {
    if(isRecording) return "mic-wave";
    return ""; 
}

const mapStateToProps = (state: any) => {
    return {
        isRecording: state.results.recording
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return{
        toggleMic: (isRecording: boolean) => {
            dispatch(recording(isRecording));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mic);