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
            {
                comments.map((comment: any, index: number) => 
                    <BubbleAndPopup
                        slide={commentProperties[index].slide}
                        animationDuration={commentProperties[index].duration}
                        delay={commentProperties[index].delay}
                        fillMode="backwards" 
                        top={commentProperties[index].topBubble}
                        popup={SentimentPopup}
                        emoji={getEmoji(comment.sentiment)}

                        blah={executeThis(commentProperties[index].topBubble, commentProperties[index].topEmoji)}
                    >
                        <SpeechBubble 
                            text={comment.text} 
                            position={commentProperties[index].position}
                            top={commentProperties[index].topEmoji}
                        />
                    </BubbleAndPopup>
                )
            }

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
                  



            {/* <BubbleAndPopup
                slide={commentProperties[0].slide}
                animationDuration={commentProperties[0].duration}
                delay={commentProperties[0].delay}
                fillMode="backwards" 
                top={commentProperties[0].topBubble}
                popup={SentimentPopup}
                emoji={getEmoji(comments[0].sentiment)}

                blah={executeThis(commentProperties[0].topBubble, commentProperties[0].topEmoji)}
            >
                <SpeechBubble 
                    text={comments[0].text} 
                    position={commentProperties[0].position}
                    top={commentProperties[0].topEmoji}
                />
            </BubbleAndPopup>

            <BubbleAndPopup
                slide={commentProperties[1].slide}
                animationDuration={commentProperties[1].duration}
                delay={commentProperties[1].delay}
                fillMode="backwards" 
                top={commentProperties[1].topBubble}
                popup={SentimentPopup}
                emoji={getEmoji(comments[1].sentiment)}

                blah={executeThis(commentProperties[1].topBubble, commentProperties[1].topEmoji)}
            >
                <SpeechBubble 
                    text={comments[1].text} 
                    position={commentProperties[1].position}
                    top={commentProperties[1].topEmoji}
                />
            </BubbleAndPopup>

            <BubbleAndPopup
                slide={commentProperties[2].slide}
                animationDuration={commentProperties[2].duration}
                delay={commentProperties[2].delay}
                fillMode="backwards" 
                top={commentProperties[2].topBubble}
                popup={SentimentPopup}
                emoji={getEmoji(comments[2].sentiment)}

                blah={executeThis(commentProperties[2].topBubble, commentProperties[2].topEmoji)}
            >
                <SpeechBubble 
                    text={comments[2].text} 
                    position={commentProperties[2].position}
                    top={commentProperties[2].topEmoji}
                />
            </BubbleAndPopup>

            <BubbleAndPopup
                slide={commentProperties[3].slide}
                animationDuration={commentProperties[3].duration}
                delay={commentProperties[3].delay}
                fillMode="backwards" 
                top={commentProperties[3].topBubble}
                popup={SentimentPopup}
                emoji={getEmoji(comments[3].sentiment)}

                blah={executeThis(commentProperties[3].topBubble, commentProperties[3].topEmoji)}
            >
                <SpeechBubble 
                    text={comments[3].text} 
                    position={commentProperties[3].position}
                    top={commentProperties[3].topEmoji}
                />
            </BubbleAndPopup>

            <BubbleAndPopup
                slide={commentProperties[4].slide}
                animationDuration={commentProperties[4].duration}
                delay={commentProperties[4].delay}
                fillMode="backwards" 
                top={commentProperties[4].topBubble}
                popup={SentimentPopup}
                emoji={getEmoji(comments[4].sentiment)}

                blah={executeThis(commentProperties[4].topBubble, commentProperties[4].topEmoji)}
            >
                <SpeechBubble 
                    text={comments[4].text} 
                    position={commentProperties[4].position}
                    top={commentProperties[4].topEmoji}
                />
            </BubbleAndPopup>

            <BubbleAndPopup
                slide={commentProperties[5].slide}
                animationDuration={commentProperties[5].duration}
                delay={commentProperties[5].delay}
                fillMode="backwards" 
                top={commentProperties[5].topBubble}
                popup={SentimentPopup}
                emoji={getEmoji(comments[5].sentiment)}

                blah={executeThis(commentProperties[5].topBubble, commentProperties[5].topEmoji)}
            >
                <SpeechBubble 
                    text={comments[5].text} 
                    position={commentProperties[5].position}
                    top={commentProperties[5].topEmoji}
                />
            </BubbleAndPopup> */}                                                
        </div>
    );
};

const executeThis = (topBubble: number, topEmoji: number) => {
    console.log("**************** \n topBubble: " + topBubble + "\n topEmoji:  " + topEmoji + "\n *********************")
}

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