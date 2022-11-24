import {trimDecimals} from "../../ts/utils";
import "../css/Needle.scss";

function NeedleWithTransition(props: any) {
    const trimmedSubjectivity = trimDecimals(props.subjectivity, 2);
    const angle = calcRotation(trimmedSubjectivity);

    return (
        <div className="needle"
            style={{
                
            }}
        >

        </div>
    )
}

const calcRotation = (subjectivity: number): number => {
    let angle: number = 0;
    if(subjectivity <= 0.5){
        angle = Math.floor(90 * subjectivity * 2) - 90;
    } else {
        angle = Math.floor(90 * (subjectivity - 0.5) * 2);
    }
    return angle;
};

const calcDuration = (subjectivity: number, maxDuration: number): number => {
    return subjectivity * maxDuration;
};

export default NeedleWithTransition;