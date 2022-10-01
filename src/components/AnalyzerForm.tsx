import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SubmitButton from './SubmitButton'
import { textAreaChanged } from '../redux/actions';

export const AnalyzerForm = (props: any) => {
    return (
        <form className="analyzer-form"
            onSubmit={(event) => handleSubmit(event, props.text)}
        >
            <textarea className="analyzer-box"
                cols={30}
                rows={10}
                onChange={(event) => props.handleChange(event.target.value)}
            >

            </textarea>
            <SubmitButton name="Analyze!" />
        </form>
    );
}

const handleSubmit = (event: any, text: string) => {
    event.preventDefault();
    console.log("text:   ", text)
};

const mapStateToProps = (state: any) => {
    return{
        text: state.results.analysisText
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        handleChange: (text: string) => {
            dispatch(textAreaChanged(text));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzerForm)