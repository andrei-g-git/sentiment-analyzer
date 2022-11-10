import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import StarScore from "../StarScore";
import LegendWithBar from './LegendWithBar';
import LegendWithGraphic from './LegendWithGraphic';
import SubjectivityGauge from '../Gauge/SubjectivityGauge';
import DualValues from './DualValues';
import "./Results.scss";


function Results(props: any) {

    const[rowValueColor, setRowValueColor] = useState("green");
    useEffect(() => {
        if(props.sentiment === "positive") setRowValueColor("green");
        if(props.sentiment === "negative") setRowValueColor("red");
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
                            color: "lightgray"
                        },
                        {
                            value: props.emotions.fear.toFixed(2),
                            color: "lightgray"
                        }
                    ],
                    [
                        {
                            value: "Anger",
                            color: "lightgray"
                        },
                        {
                            value: props.emotions.anger.toFixed(2),
                            color: "lightgray"
                        }
                    ],
                    [
                        {
                            value: "Anticipation",
                            color: "lightgray"
                        },
                        {
                            value: props.emotions.anticipation.toFixed(2),
                            color: "lightgray"
                        }
                    ],
                    [
                        {
                            value: "Trust",
                            color: "lightgray"
                        },
                        {
                            value: props.emotions.trust.toFixed(2),
                            color: "lightgray"
                        }
                    ],
                    [
                        {
                            value: "Surprise",
                            color: "lightgray"
                        },
                        {
                            value: props.emotions.surprise.toFixed(2),
                            color: "lightgray"
                        }
                    ],
                    [
                        {
                            value: "Sadness",
                            color: "lightgray"
                        },
                        {
                            value: props.emotions.sadness.toFixed(2),
                            color: "lightgray"
                        }
                    ],
                    [
                        {
                            value: "Disgust",
                            color: "lightgray"
                        },
                        {
                            value: props.emotions.disgust.toFixed(2),
                            color: "lightgray"
                        }
                    ],
                    [
                        {
                            value: "Joy",
                            color: "lightgray"
                        },
                        {
                            value: props.emotions.joy.toFixed(2),
                            color: "lightgray"
                        }
                    ]               
                ]}
            />           
        </div>
    )
}
/* 

    fear: string | number,
    anger: string | number,
    anticipation: string | number,
    trust: string | number,
    surprise: string | number,
    positive: string | number,
    negative: string | number,
    sadness: string | number,
    disgust: string | number,
    joy: string | number

*/
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