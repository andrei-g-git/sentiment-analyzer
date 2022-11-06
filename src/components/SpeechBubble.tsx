import "../css/SpeechBubble.scss";

function SpeechBubble(props: any) {
    return (
        <div className={`bubble-container 
                corner-bottom-left            
                bottom-left-${props.top}             
                slide-left`
            }
            style={{top: `${props.top}%`}}
        >
            {props.text}
        </div>
    );
};

export default SpeechBubble;