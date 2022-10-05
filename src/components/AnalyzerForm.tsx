import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import $ from "jquery";
import SubmitButton from './SubmitButton';
import { 
    textAreaChanged, 
    sentimentChanged,
    scoreChanged,
    subjectivityChanged 
} from '../redux/actions';
import "../css/AnalyzerForm.scss";

export const AnalyzerForm = (props: any) => {
    return (
        <form className="analyzer-form"
            onSubmit={(event) => handleSubmit(
                event, 
                props.text, 
                props.changeScore,
                props.changeSentiment,
                props.changeSubjectivity
            )}
        >
            <textarea className="analyzer-box"
                cols={30}
                rows={10}
                onChange={(event) => props.handleChange(event.target.value)}
                placeholder="write here..."
            >

            </textarea>
            <div className="submit-wrapper">
                <SubmitButton name="Analyze mood!" />                
            </div>

        </form>
    );
}

const handleSubmit = (event: any, text: string, changeScore: Function, changeSentiment: Function, changeSubjectivity: Function) => {
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
            const res = JSON.parse(response)
            changeScore(res.score)
            changeSentiment(res.sentiment)
            changeSubjectivity(res.subjectivity)
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
        },
        changeScore: (value: number) => {
            dispatch(scoreChanged(value));
        },
        changeSentiment: (sentiment: string) => {
            dispatch(sentimentChanged(sentiment));
        },
        changeSubjectivity: (value: number) => {
            dispatch(subjectivityChanged(value));
        }                
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzerForm)