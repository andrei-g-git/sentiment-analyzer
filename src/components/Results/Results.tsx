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
            ]} />

            <LegendWithGraphic heading="Subjectivity:" >
                <SubjectivityGauge subjectivity={props.subjectivity}/>
            </LegendWithGraphic>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        score: state.results.score,
        subjectivity: state.results.subjectivity,
        sentiment: state.results.sentiment
    };
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Results);