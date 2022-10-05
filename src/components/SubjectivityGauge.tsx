import "../css/SubjectivityGauge.scss";
import gauge from "../assets/img/gauge.png";
import needle from "../assets/img/needle.png";

function SubjectivityGauge(props: any) {
    return (
        <div className="subjectivity-gauge">
            <img className="gauge" 
                src={gauge}
                alt="gauge"
            />
            <img className="needle" 
                src={needle}
                alt="needle"
                style={{
                    transform: `
                        translate(40px, 6px)
                        rotate(calc(${calcRotation(props.subjectivity)}deg + 20deg)
                    `
                }}
            />            
        </div>
    );
}

const calcRotation = (subjectivity: number): number => {
    let angle: number = 0;
    if(subjectivity <= 0.5){
        angle = Math.floor(90 * subjectivity * 2) - 90;
    } else {
        angle = Math.floor(90 * (subjectivity - 0.5) * 2);
    }
    console.log(angle)
    return angle; //subj is range 0~1
};

export default SubjectivityGauge;