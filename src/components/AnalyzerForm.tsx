import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import $ from "jquery";
import SubmitButton from './SubmitButton';
import { 
    textAreaChanged, 
    sentimentChanged,
    scoreChanged,
    subjectivityChanged,
    emotionsChanged,
    loaded
} from '../redux/actions';
import { HasStringKeys, Emotions } from '../redux/interface/reduxInderface';
import "../css/AnalyzerForm.scss";

export const AnalyzerForm = (props: any) => {
    return (
        <form className="analyzer-form"
            onSubmit={(event) => handleSubmit(
                event, 
                props.text, 
                props.changeScore,
                props.changeSentiment,
                props.changeSubjectivity,
                props.changeEmotions,
                props.toggleLoading
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

const handleSubmit = (event: any, text: string, changeScore: Function, changeSentiment: Function, changeSubjectivity: Function, changeEmotions: Function, toggleLoading: Function) => {
    event.preventDefault();
    console.log("text:   ", text);

    const data = JSON.stringify({
        text: text
    });

    toggleLoading(true);

    $.ajax({
        url: "http://andreigiura.com/analyze",
        type: "POST",
        data: data,
        dataType: "text",
        contentType: "application/json"
    })
        .then(response => {
            console.log("RESPONSE:::::   ", response);
            const res = JSON.parse(response);
            console.log("object>>>  ",res);
            changeScore(res.score);
            changeSentiment(res.sentiment);
            changeSubjectivity(res.subjectivity);
            delete res.emotions.positive;
            delete res.emotions.negative;
            delete res.emotions.neutral;
            console.log("EMOTIONS>>>  ",res.emotions);
            changeEmotions(res.emotions);
            toggleLoading(false);
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
        },
        changeEmotions: (emotions: HasStringKeys<string | number>) => {
            dispatch(emotionsChanged(emotions));
        },
        toggleLoading: (loading: boolean) => {
            dispatch(loaded(loading));
        }                
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzerForm)