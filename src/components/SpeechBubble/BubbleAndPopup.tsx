import { useState } from "react";
import "./BubbleAndPopup.scss";

function BubbleAndPopup(props: any) {

    const [isPaused, setPaused] = useState(false);
    const popDuration = 0.5;
    const shrinkDelay = 0.3; 
    const hangDelay = 1.5;    
    return (
        <div className="bubble-and-popup-container"
            style={{
                top: `${props.top}%`,
            }}
        >
            <div className="bubble-and-popup"
                style={{
                    
                    animation: `slide-${props.slide} ${props.animationDuration}s linear infinite`,
                    animationDelay: `${props.delay}s`,
                    animationFillMode: props.fillMode,
                    animationPlayState: isPaused ? "paused" : "running"
                }}  
                onMouseOver={() => setPaused(true)}
                onMouseDown={() => handleMouseDown(setPaused, popDuration + shrinkDelay + hangDelay)}
                onMouseLeave={() => setPaused(false)}                  
            >
                {props.children}
                <props.popup 
                    pop={isPaused}
                    emoji={props.emoji}
                    popDuration={popDuration}
                    shrinkDuration={shrinkDelay}
                />
            </div>            
        </div>

    );
};

const handleMouseDown = (setPaused: Function, delay: number) => { //for mobile --- doesn't work, flashes too quickly
    setPaused(true);
    setTimeout(() => {
        setPaused(false);
    },
        delay
    );
};

export default BubbleAndPopup;