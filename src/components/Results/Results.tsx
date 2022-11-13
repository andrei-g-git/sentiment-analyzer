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
    const[emotionValueColors, setEmotionValueColors] = useState({
        fear: "",
        anger: "",
        //anticipation: "",
        anticip: "",
        trust: "",
        surprise: "",
        positive: "",
        negative: "",
        sadness: "",
        disgust: "",
        joy: ""        
    });
    useEffect(() => {
        if(props.sentiment === "positive") setRowValueColor("green");
        if(props.sentiment === "negative") setRowValueColor("red");

        let max = filterMaxValueInDict(props.emotions);
        max = parseFloat(max.toFixed(2));
        console.log("PROPS DOT EMOTIONS: ````````````````````   \n", props.emotions);
        console.log("MAX -------->   ", max)
        let colorsObject: any = {};
        Object.keys(props.emotions)
            .forEach((key) => {
                colorsObject[key] = "";
                if(parseFloat(props.emotions[key].toFixed(2)) === max){
                    colorsObject[key] = "#000000";
                }                
            });
        setEmotionValueColors(colorsObject);
        console.log("COLORS OBJECT------------: \n", colorsObject)
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
                            color: ""
                        },
                        {
                            value: props.emotions.fear.toFixed(2),
                            color: emotionValueColors["fear"]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Anger",
                            color: ""
                        },
                        {
                            value: props.emotions.anger.toFixed(2),
                            color: emotionValueColors["anger"]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Anticipation",
                            color: ""
                        },
                        {
                            value: props.emotions.anticip/* ation */.toFixed(2),
                            color: emotionValueColors["anticip"]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Trust",
                            color: ""
                        },
                        {
                            value: props.emotions.trust.toFixed(2),
                            color: emotionValueColors["trust"]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Surprise",
                            color: ""
                        },
                        {
                            value: props.emotions.surprise.toFixed(2),
                            color: emotionValueColors["surprise"]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Sadness",
                            color: ""
                        },
                        {
                            value: props.emotions.sadness.toFixed(2),
                            color: emotionValueColors["sadness"]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Disgust",
                            color: ""
                        },
                        {
                            value: props.emotions.disgust.toFixed(2),
                            color: emotionValueColors["disgust"]//""//"lightgray"
                        }
                    ],
                    [
                        {
                            value: "Joy",
                            color: ""
                        },
                        {
                            value: props.emotions.joy.toFixed(2),
                            color: emotionValueColors["joy"]//""//"lightgray"
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