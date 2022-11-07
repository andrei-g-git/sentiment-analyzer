import {useState} from "react";
import "./SpeechBubble.scss";

function SpeechBubble(props: any) {

    const [isPaused, setPaused] = useState(false);

    return (
        <div className={`bubble-container 
                corner-${props.position}            
                ${props.position}-${props.top}`             
                //slide-${props.slide}`
            }
            // style={{
            //     top: `${props.top}%`,
            //     animation: `slide-${props.slide} ${props.animationDuration}s linear infinite`,
            //     animationDelay: `${props.delay}s`,
            //     animationFillMode: props.fillMode,
            //     animationPlayState: isPaused ? "paused" : "running"
            // }}
            // onMouseOver={() => setPaused(true)}
            // onMouseLeave={() => setPaused(false)}
        >
            {props.text}
        </div>
    );
};

export default SpeechBubble;