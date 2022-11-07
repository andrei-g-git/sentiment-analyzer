import { useState } from "react";
import "./BubbleAndPopup.scss";

function BubbleAndPopup(props: any) {

    const [isPaused, setPaused] = useState(false);
        
    return (
        <div className="bubble-and-popup"
            style={{
                top: `${props.top}%`,
                animation: `slide-${props.slide} ${props.animationDuration}s linear infinite`,
                animationDelay: `${props.delay}s`,
                animationFillMode: props.fillMode,
                animationPlayState: isPaused ? "paused" : "running"
            }}  
            onMouseOver={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}                  
        >
            {props.children}
            <props.popup 
                pop={isPaused}
                emoji={props.emoji}
            />
        </div>
    );
};

const handlePopupAnimation = () => {

};

export default BubbleAndPopup;