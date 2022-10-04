import { connect } from 'react-redux'
import StarScore from "./StarScore";
import "../css/Results.scss";

function Results(props: any) {
    return (
        <div className="results">
            <br/>
            <br/>
            results
            <br/>
            <br/>
            <StarScore stars={Math.floor(props.score)} />
            <br/>
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