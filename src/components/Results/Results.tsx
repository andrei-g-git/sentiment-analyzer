import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import StarScore from "./StarScore";
import LegendWithBar from './LegendWithBar';
import LegendWithGraphic from './LegendWithGraphic';
import SubjectivityGauge from '../Gauge/SubjectivityGauge';
import DualValues from './DualValues';
import { useMaxValueColor, useMaxValueClass, useSentimentColor } from './resultHooks';
import { filterMaxValueInDict } from '../../ts/utils';
import { HasStringKeys } from '../../redux/interface/reduxInderface';
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

    let emotionValueClasses/* Colors */ = useMaxValueClass(//Color(
        props.sentiment, 
        props.emotions, 
        // {
        //     fear: "",
        //     anger: "",
        //     anticip: "",
        //     trust: "",
        //     surprise: "",
        //     positive: "",
        //     negative: "",
        //     sadness: "",
        //     disgust: "",
        //     joy: ""             
        // },
        {},
        filterMaxValueInDict        
    );

    return (
        <div className="results">
            {/* <p className="section-title">
                Results:                
            </p> */}

            <LegendWithGraphic heading="Overall score:" >
                <StarScore stars={props.score} /> {/* stars={Math.floor(props.score)} /> */}
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
                // values={[
                //     [
                //         {
                //             value: "Fear",
                //             //color: ""
                //             class: "non-max"
                //         },
                //         {
                //             value: props.emotions.fear.toFixed(2),
                //             //color: emotionValueColors["fear"]
                //             class: emotionValueClasses["fear"]
                //         }
                //     ],
                //     [
                //         {
                //             value: "Anger",
                //             //color: ""
                //             class: "non-max"
                //         },
                //         {
                //             value: props.emotions.anger.toFixed(2),
                //             //color: emotionValueColors["anger"]
                //             class: emotionValueClasses["anger"]
                //         }
                //     ],
                //     [
                //         {
                //             value: "Anticipation",
                //             //color: ""
                //             class: "non-max"
                //         },
                //         {
                //             value: props.emotions.anticip/* ation */.toFixed(2),
                //             //color: emotionValueColors["anticip"]
                //             class: emotionValueClasses["anticip"]
                //         }
                //     ],
                //     [
                //         {
                //             value: "Trust",
                //             //color: ""
                //             class: "non-max"
                //         },
                //         {
                //             value: props.emotions.trust.toFixed(2),
                //             //color: emotionValueColors["trust"]
                //             class: emotionValueClasses["trust"]
                //         }
                //     ],
                //     [
                //         {
                //             value: "Surprise",
                //             //color: ""
                //             class: "non-max"
                //         },
                //         {
                //             value: props.emotions.surprise.toFixed(2),
                //             //color: emotionValueColors["surprise"]
                //             class: emotionValueClasses["surprise"]
                //         }
                //     ],
                //     [
                //         {
                //             value: "Sadness",
                //             //color: ""
                //             class: "non-max"
                //         },
                //         {
                //             value: props.emotions.sadness.toFixed(2),
                //             //color: emotionValueColors["sadness"]
                //             class: emotionValueClasses["sadness"]
                //         }
                //     ],
                //     [
                //         {
                //             value: "Disgust",
                //             //color: ""
                //             class: "non-max"
                //         },
                //         {
                //             value: props.emotions.disgust.toFixed(2),
                //             //color: emotionValueColors["disgust"]
                //             class: emotionValueClasses["disgust"]
                //         }
                //     ],
                //     [
                //         {
                //             value: "Joy",
                //             //color: ""
                //             class: "non-max"
                //         },
                //         {
                //             value: props.emotions.joy.toFixed(2),
                //             //color: emotionValueColors["joy"]
                //             class: emotionValueClasses["joy"]
                //         }
                //     ]               
                // ]}
            />           
        </div>
    )
}

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
        emotions: state.results.emotions
    };
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Results);