import "../css/SpeechBubble.scss";

function SpeechBubble(props: any) {
    return (
        <div className="bubble-container right-top">
            {props.text}
        </div>
    );
};

export default SpeechBubble;