import "../css/SpeechBubble.scss";

function SpeechBubble(props: any) {
    return (
        <div className="bubble-container 
                corner-bottom-right 
                right-bottom-white--------nooooope-not using                
                right-bottom                
                slide-right"
        >
            {props.text}
        </div>
    );
};

export default SpeechBubble;