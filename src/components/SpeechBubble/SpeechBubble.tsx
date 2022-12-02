import {useState} from "react";
import "./SpeechBubble.scss";

function SpeechBubble(props: any) {

    const [isPaused, setPaused] = useState(false);

    return (
        <div className={`bubble-container 
                corner-${props.position}            
                ${props.position}`//-${props.top}`             
            }
        >
            {props.text}
        </div>
    );
};

export default SpeechBubble;