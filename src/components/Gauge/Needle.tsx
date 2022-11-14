import {trimDecimals} from "../../ts/utils";
import "./Needle.scss";

function Needle(props: any) {

    const trimmedSubjectivity = trimDecimals(props.subjectivity, 2);
    const angle = calcRotation(trimmedSubjectivity);

    return (
        <div className="needle"
            style={{
                transform: `
                    rotate(${calcRotation(trimmedSubjectivity)}deg)
                    scale(1.2, 1.2)
                `,
                transitionDuration: `${calcDuration(trimmedSubjectivity, 2)}s`,
                transitionTimingFunction: "cubic-bezier(0.5, 1.9, 0.15, 0.36)"               
            }}
        >

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
    return angle;
};

const calcDuration = (subjectivity: number, maxDuration: number): number => {
    return subjectivity * maxDuration;
};

export default Needle;