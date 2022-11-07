//import { keyframes } from "styled-components";
import {trimDecimals} from "../../ts/utils";
import "./Needle.scss";

function Needle(props: any) {

    const trimmedSubjectivity = trimDecimals(props.subjectivity, 2);
    const angle = calcRotation(trimmedSubjectivity);

    return (
        <div className="needle"
            style={{

                // animationName: `${getAnimation(angle).getName()}`,
                // animationDuration: `${calcDuration(trimmedSubjectivity, 7)}s`,
                // animationTimingFunction: "ease-in-out"

                transform: `translate(50px, 0)
                    rotate(calc(20deg + ${calcRotation(trimmedSubjectivity)}deg))
                    scale(1.2, 1.2)`,
                transitionDuration: `${calcDuration(trimmedSubjectivity, 2)}s`,
                transitionTimingFunction: "cubic-bezier(0.5, 2.25, 0.7, -0.2)"      
                // transition: `
                
                // `           
            }}
        >

        </div>
    );
}

// const getAnimation = (angle: number) => {
//     console.log("ANGLE:   ", angle)
//     return keyframes`
//         from{
//             transform: translate(50px, 0)
//                 rotate(calc(20deg - 90deg));
//         }
//         to{
//             transform: translate(50px, 0)
//                 rotate(calc(20deg + ${angle}deg));
//         }    
//     `;
// };

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

const getTransitionStyle = (subjectivity: number, maxDuration: number) => {
    return {
        transform: `translate(50px, 0)
            rotate(calc(20deg + ${calcRotation(subjectivity)}deg))`,
        transitionDuration: `${calcDuration(subjectivity, maxDuration)}s`,
        transitionTimingFunction: "ease-in-out"      
    }
};
export default Needle;