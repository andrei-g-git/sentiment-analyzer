import { connect } from 'react-redux'
import StarScore from "./StarScore";
import LegendWithBar from './LegendWithBar';
import LegendWithGraphic from './LegendWithGraphic';
import SubjectivityGauge from '../Gauge/SubjectivityGauge';
import DualValues from './DualValues';
import { useMaxValueClass, useSentimentColor } from './resultHooks';
import { filterMaxValueInDict } from '../../ts/utils';
import { HasStringKeys } from '../../redux/interface/reduxInderface';
import CssSpinner from '../loading/CssSpinner';
import "./Results.scss";
import "../../css/Common.scss";

function Results(props: any) {
      
    const rowValueColor = useSentimentColor(
        props.sentiment,
        "positive",
        "negative",
        "green",
        "red",
        "black"
    );

    let emotionValueClasses = useMaxValueClass(
        props.sentiment, 
        props.emotions, 
        {},
        filterMaxValueInDict        
    );

    return (
        <div className="results">

            <div className={"blur-container" + toggleLoadingClass(props.loading)}>

                <LegendWithGraphic heading="Overall score:" >
                    <StarScore stars={props.score} /> 
                </LegendWithGraphic>
                    
                <LegendWithBar headings={["Sentiment", "Confidence"]} />

                <DualValues values={[
                        [
                            {
                                value: props.sentiment[0].toUpperCase() + props.sentiment.substring(1), 
                                color: rowValueColor
                            },
                            {
                                value: "n/a yet",
                                color: ""
                            }
                        ]
                    ]} 
                />

                <LegendWithGraphic heading="Subjectivity:" >
                    <SubjectivityGauge subjectivity={props.subjectivity}/>
                </LegendWithGraphic>

                <LegendWithBar headings={["Emotion range:"]} />

                <DualValues score={props.score} 
                    values={createValues(props.emotions, emotionValueClasses)}
                />               
            </div>    

            <CssSpinner loading={props.loading}/>     
        </div>
    )
}

const toggleLoadingClass = (loading: boolean) => {
    console.log("LOADDING?????   ", loading);
    return loading? " blurred-light" : ""; //I have no idea why this only works as a function and not written directly into the tsx...
};

const createValues = (emotions: HasStringKeys<number>, classes: HasStringKeys<string>) => {
    let values: any[][]= [];
    Object.keys(emotions).forEach((key) => {
        values.push([
            {
                value: key,
                class: "non-max"
            },
            {
                value: emotions[key].toFixed(3),
                class: classes[key]
            }
        ])
    });
    return values;
}

const mapStateToProps = (state: any) => {
    return {
        score: state.results.score,
        subjectivity: state.results.subjectivity,
        sentiment: state.results.sentiment,
        emotions: state.results.emotions,
        loading: state.results.loading
    };
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Results);