import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import $ from "jquery";
import SubmitButton from './SubmitButton';
import { textAreaChanged } from '../redux/actions';
import "../css/AnalyzerForm.scss";

export const AnalyzerForm = (props: any) => {
    return (
        <form className="analyzer-form"
            onSubmit={(event) => handleSubmit(event, props.text)}
        >
            <textarea className="analyzer-box"
                cols={30}
                rows={10}
                onChange={(event) => props.handleChange(event.target.value)}
                placeholder="write here..."
            >

            </textarea>
            <SubmitButton name="Analyze mood!" />
        </form>
    );
}

const handleSubmit = (event: any, text: string) => {
    event.preventDefault();
    console.log("text:   ", text);

    const data = JSON.stringify({
        text: text
    });

    $.ajax({
        url:"http://localhost:9999/analyze",
        type: "POST",
        data: data,
        dataType: "text"
    })
        .then(response => {
            console.log(response);
        });
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