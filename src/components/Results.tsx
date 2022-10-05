import { connect } from 'react-redux'
import StarScore from "./StarScore";
import LegendWithBar from './LegendWithBar';
import "../css/Results.scss";

function Results(props: any) {
    return (
        <div className="results">
            <p className="section-title">
                Results                
            </p>

            <div className="row-title-centered-graphic">
                <p className="graphic-title">
                    Overall score
                </p>
                <StarScore stars={Math.floor(props.score)} />                
            </div>

            <LegendWithBar headings={["Header 1", "Header 2"]} />


        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        score: state.results.score
    };
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Results);