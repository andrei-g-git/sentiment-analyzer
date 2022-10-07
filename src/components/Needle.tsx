import React from 'react';
import { Keyframes } from './Keyframes';
import needle from "../assets/img/needle.png";

function Needle(props: any) {
    return (
        <div className="needle"
            style={{
                backgroundImage: `url(${needle})`,
                backgroundRepeat: "no-repeat",
                //backgroundPosition: "18% 0%",
                backgroundSize: "30px 80px",
                position: "absolute",
                // width: "30px",
                // height: "80px",
                transform: `translate(70px, 12px)`,// rotate(20deg)`,
                transformOrigin: "50% 100%",
                

                animation: "anim-name 2s forwards ease-in-out",


            }}            
        >

            <style>
                {
                    `
                        @keyframes anim-name {
                            from{
                                transform: rotate(calc(20deg - 90deg));
                            }
                            to{
                                transform: rotate(calc(20deg + ${calcRotation(props.subjectivity)}deg));
                            }
                        }                       
                    
                    `
                }
            </style>


            {/* <Keyframes name="turn-needle-standard" 
                from={{transform: `rotate(20deg`}}
                to={{transform: `rotate(calc(${calcRotation(props.subjectivity)}deg + 20deg)`}}
            />    */}

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
    console.log("ANGLE:   ", angle)
    return angle; //subj is range 0~1
};

export default Needle;