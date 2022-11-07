import {useState, useEffect} from "react";

import "./SentimentPopup.scss";

function SentimentPopup(props: any) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(count > 0){
            props.pop ?
                style = {
                    animation: `pop ${props.popDuration}s forwards ease-in-out`
                }
            :
                style = {
                    animation: `shrink ${props.shrinkDuration}s forwards ease-in-out`
                }            
        }

        setCount(count + 1)            
    },
        [props.pop]
    );

    return (
        <img className="sentiment-popup"
            src={props.emoji}
            alt="popup"
            style={style}
        />
    );
};

let style: any = {
    display: "none"
};

export default SentimentPopup;