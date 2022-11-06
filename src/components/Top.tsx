import SpeechBubble from "./SpeechBubble";
import "../css/Top.scss";

function Top() {
    return (
        <div className="top">
            <SpeechBubble 
                text="waef fweafawef awefawefawe fawefawef  waef eg 4ygret re!!!!" 
                position="top-left"
                slide="right"
                animationDuration={7}
                delay={1}
                fillMode="backwards" 
                top={10}
            />

            <SpeechBubble 
                text="aaaaa a aaaaa aaaaaaa" 
                position="bottom-right"
                slide="left"
                animationDuration={15}
                delay={2}
                fillMode="backwards" 
                top={30}
            />    

            <SpeechBubble 
                text="gggggg g gggggggg g gggggg wetewf wefew ggggggggggwef wef fwewewewewewe" 
                position="top-left"
                slide="right"
                animationDuration={10}
                delay={3}
                fillMode="backwards" 
                top={20}
            />                    
        </div>
    );
};

export default Top;