import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import StarScore from "../StarScore";
import LegendWithBar from './LegendWithBar';
import LegendWithGraphic from './LegendWithGraphic';
import SubjectivityGauge from '../Gauge/SubjectivityGauge';
import DualValues from './DualValues';
import { filterMaxValueInDict } from '../../ts/utils';
import "./Results.scss";


function Results(props: any) {

    const[rowValueColor, setRowValueColor] = useState("green");
    const[emotionValueColors, setEmotionValueColors] = useState({});
    useEffect(() => {
        if(props.sentiment === "positive") setRowValueColor("green");
        if(props.sentiment === "negative") setRowValueColor("red");

        const max = filterMaxValueInDict(props.emotions)[0];
        let colorsObject: any;
        colorsObject = Object.assign({}, props.emotions);
        Object
            .keys(colorsObject)
            .forEach(key => {
                colorsObject[key] = "";
                if(props.emotions[key] === max){
                    colorsObject[key] = "rgb(20, 20, 20)";
                }
            });
        setEmotionValueColors(colorsObject);
    }, 
        [props.sentiment]
    );
    

    return (
        <div className="results">
            <p className="section-title">
                Results                
            </p>

            <LegendWithGraphic heading="Overall score:" >
                <StarScore stars={Math.floor(props.score)} />
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

            <DualValues values={[
                    [
                        {
                            value: "Fear",
                            color: emotionValueColors[""]//""//"lightgray"
                        },
                        {
                            value: props.emotions.fear.toFixed(2),
                            color: emotionValueColors[""]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Anger",
                            color: emotionValueColors[""]//""//"lightgray"
                        },
                        {
                            value: props.emotions.anger.toFixed(2),
                            color: emotionValueColors[""]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Anticipation",
                            color: emotionValueColors[""]//""//"lightgray"
                        },
                        {
                            value: props.emotions.anticipation.toFixed(2),
                            color: emotionValueColors[""]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Trust",
                            color: emotionValueColors[""]//""//"lightgray"
                        },
                        {
                            value: props.emotions.trust.toFixed(2),
                            color: emotionValueColors[""]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Surprise",
                            color: emotionValueColors[""]//""//"lightgray"
                        },
                        {
                            value: props.emotions.surprise.toFixed(2),
                            color: emotionValueColors[""]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Sadness",
                            color: emotionValueColors[""]//""//"lightgray"
                        },
                        {
                            value: props.emotions.sadness.toFixed(2),
                            color: emotionValueColors[""]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Disgust",
                            color: emotionValueColors[""]//""//"lightgray"
                        },
                        {
                            value: props.emotions.disgust.toFixed(2),
                            color: emotionValueColors[""]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Joy",
                            color: emotionValueColors[""]//""//"lightgray"
                        },
                        {
                            value: props.emotions.joy.toFixed(2),
                            color: emotionValueColors[""]//""//"lightgray"
                        }
                    ]               
                ]}
            />           
        </div>
    )
}

const determineColor = (emotion: string): string => {

    return "Ass"
}

const mapStateToProps = (state: any) => {
    return {
        score: state.results.score,
        subjectivity: state.results.subjectivity,
        sentiment: state.results.sentiment,
        emotions: state.results.emotions
    };
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Results);