import "./SentimentPopup.scss";

function SentimentPopup(props: any) {
    return (
        <img className="sentiment-popup"
            src={props.emoji}
            alt="popup"
        />
    );
};

export default SentimentPopup;