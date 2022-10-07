import "../css/SubjectivityGauge.scss";
import gauge from "../assets/img/gauge.png";
import Needle from "./Needle";

function SubjectivityGauge(props: any) {
    return (
        <div className="subjectivity-gauge">
            <img className="gauge" 
                src={gauge}
                alt="gauge"
            />
            <Needle subjectivity={props.subjectivity} />
        </div>
    );
}

export default SubjectivityGauge;