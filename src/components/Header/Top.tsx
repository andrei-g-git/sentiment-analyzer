import SpeechBubble from "../SpeechBubble/SpeechBubble";
import BubbleAndPopup from "../SpeechBubble/BubbleAndPopup";
import SentimentPopup from "../SpeechBubble/SentimentPopup";
import mad from "../../assets/img/bubble-mad.png";
import neutral from "../../assets/img/bubble-neutral.png";
import happy from "../../assets/img/bubble-happy.png";
import { comments, commentProperties } from "../SpeechBubble/comments";
import "./Top.scss";

function Top() {
    return (
        <div className="top">
            {/* {
                comments.map((comment: any, index: number) => 
                    <BubbleAndPopup
                        slide={commentProperties[index].slide}
                        animationDuration={commentProperties[index].duration}
                        delay={commentProperties[index].delay}
                        fillMode="backwards" 
                        top={commentProperties[index].topBubble}
                        popup={SentimentPopup}
                        emoji={getEmoji(comment.sentiment)}
                    >
                        <SpeechBubble 
                            text={comment.text} 
                            position={commentProperties[index].position}
                            top={commentProperties[index].topEmoji}
                        />
                    </BubbleAndPopup>
                )
            } */}

            {/* <BubbleAndPopup
                slide="right"
                animationDuration={7}
                delay={1}
                fillMode="backwards" 
                top={15}
                popup={SentimentPopup}
                emoji={mad}
            >
                <SpeechBubble 
                    text="waef fweafawef awefawefawe fawefawef  waef eg 4ygret re!!!!" 
                    position="top-left"
                    top={10}
                />
            </BubbleAndPopup>

            <BubbleAndPopup
                slide="left"
                animationDuration={15}
                delay={2}
                fillMode="backwards" 
                top={30}
                popup={SentimentPopup}
                emoji={happy}
            >
                <SpeechBubble 
                    text="aaaaa a aaaaa aaaaaaa" 
                    position="bottom-right"
                    top={20}

                />                  
            </BubbleAndPopup>
  
            <BubbleAndPopup
                slide="right"
                animationDuration={10}
                delay={3}
                fillMode="backwards" 
                top={20}
                popup={SentimentPopup}
                emoji={neutral}
            >
                <SpeechBubble 
                    text="gggggg g gggggggg g gggggg wetewf wefew ggggggggggwef wef fwewewewewewe" 
                    position="top-left"
                    top={30}

                />                  
            </BubbleAndPopup> */}
                  
        </div>
    );
};

const getEmoji = (sentiment: string) => {
    switch(sentiment){
        case "positive": return happy;
        case "neutral": return neutral;
        case "negative": return mad;
        default: return happy;
    }
    return happy;
};

export default Top;