import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import StarScore from "../StarScore";
import LegendWithBar from './LegendWithBar';
import LegendWithGraphic from './LegendWithGraphic';
import SubjectivityGauge from '../Gauge/SubjectivityGauge';
import DualValues from './DualValues';
import { useMaxValueColor, useSentimentColor } from './resultHooks';

import "./Results.scss";

function Results(props: any) {
      
    const rowValueColor = useSentimentColor(
        props.sentiment,
        "positive",
        "negative",
        "green",
        "red",
        "black"
    );

    let emotionValueColors = useMaxValueColor(
        props.sentiment, 
        props.emotions, 
        {
            fear: "",
            anger: "",
            anticip: "",
            trust: "",
            surprise: "",
            positive: "",
            negative: "",
            sadness: "",
            disgust: "",
            joy: ""             
        }        
    );

    return (
        <div className="results">
            {/* <p className="section-title">
                Results:                
            </p> */}

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
                            color: emotionValueColors["fear"]
                        }
                    ],
                    [
                        {
                            value: "Anger",
                            color: ""
                        },
                        {
                            value: props.emotions.anger.toFixed(2),
                            color: emotionValueColors["anger"]
                        }
                    ],
                    [
                        {
                            value: "Anticipation",
                            color: ""
                        },
                        {
                            value: props.emotions.anticip/* ation */.toFixed(2),
                            color: emotionValueColors["anticip"]
                        }
                    ],
                    [
                        {
                            value: "Trust",
                            color: ""
                        },
                        {
                            value: props.emotions.trust.toFixed(2),
                            color: emotionValueColors["trust"]
                        }
                    ],
                    [
                        {
                            value: "Surprise",
                            color: ""
                        },
                        {
                            value: props.emotions.surprise.toFixed(2),
                            color: emotionValueColors["surprise"]
                        }
                    ],
                    [
                        {
                            value: "Sadness",
                            color: ""
                        },
                        {
                            value: props.emotions.sadness.toFixed(2),
                            color: emotionValueColors["sadness"]
                        }
                    ],
                    [
                        {
                            value: "Disgust",
                            color: ""
                        },
                        {
                            value: props.emotions.disgust.toFixed(2),
                            color: emotionValueColors["disgust"]
                        }
                    ],
                    [
                        {
                            value: "Joy",
                            color: ""
                        },
                        {
                            value: props.emotions.joy.toFixed(2),
                            color: emotionValueColors["joy"]
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