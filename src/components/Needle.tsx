import {useState} from "react";
import {trimDecimals} from "../ts/utils";
import "../css/Needle.scss";

function Needle(props: any) {
    //const [rotate, setRotate] = useState(-90);

    return (
        <div className="needle"
            style={getTransitionStyle(props.subjectivity, 2)}
        >

        </div>

/*         <div className="needle">
            <style>
                { //maybe I could still scale the gauge and needle if I place media queries here in the from/to properties
                    `
                        @keyframes turn-needle {
                            from{
                                transform: translate(50px, 0)
                                    rotate(calc(20deg - 90deg));
                            }
                            to{
                                transform: translate(50px, 0)
                                    rotate(calc(20deg + ${calcRotation(props.subjectivity)}deg));
                            }
                        }                       
                    `
                }
            </style>
        </div> */
    );
}

const calcRotation = (subjectivity: number): number => {
    let angle: number = 0;
    const newSubj = parseFloat(subjectivity.toFixed(2));
    console.log("from functipn: ", subjectivity)
    if(subjectivity <= 0.5){
        angle = Math.floor(90 * newSubj * 2) - 90;
    } else {
        angle = Math.floor(90 * (newSubj - 0.5) * 2);
    }
    console.log(newSubj + "-------------- and deg:  " + angle)
    return angle;
};

const calcDuration = (subjectivity: number, maxDuration: number): number => {
    const newSubj = trimDecimals(subjectivity, 1);
    return newSubj * maxDuration;
};

const getStyleString = (subjectivity: number): string => {
    return `
        transform: translate(50px, 0)
            rotate(calc(20deg + ${calcRotation(subjectivity)}deg));
        transition-duration: ${calcDuration(subjectivity, 2)}s;
        transition-timing-function: ease-in-out;
    `;
};

const getTransitionStyle = (subjectivity: number, maxDuration: number) => {
    return {
        transform: `translate(50px, 0)
            rotate(calc(20deg + ${calcRotation(subjectivity)}deg))`,
        transitionDuration: `${calcDuration(subjectivity, maxDuration)}s`,
        transitionTimingFunction: "ease-in-out"      
    }
}
export default Needle;