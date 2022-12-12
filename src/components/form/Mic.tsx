import { Dispatch } from 'react';
import { connect } from 'react-redux';
import {
    recording
} from '../../redux/actions';
import "./Mic.scss";

export const Mic = (props: any) => {
    return (
        <div className={getMicClass(props.isRecording)} //it's a hyperlink so I can use the :target pseudo class
            onClick={() => props.toggleMic(!props.isRecording)}
            tabIndex={-1} //for click, :active is for mouse-down...
        >
            <div className={getWaveClass(props.isRecording)}></div>
        </div>
    );
};

const getMicClass = (isRecording: boolean): string => { //no idea why ternary expressions don't work...
    // const baseClass = "microphone";
    // let extraClass = " black-mic";
    // if(isRecording) extraClass = " red-mic"
    // return baseClass + extraClass;
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