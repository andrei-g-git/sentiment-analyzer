import {useState, useEffect} from "react";
import {EmotionStringValues} from "./resultsTypes";

export const useMaxValueColor = (changingValue: string, emotions: {[key: string]: number}, initialState: EmotionStringValues) => {
    const[emotionValueColors, setEmotionValueColors] = useState(initialState);

    useEffect(() => { //this does a little too many things...
        let max: any = Object
            .values(emotions)
            .sort((a: number, b: number) => a - b)
            .reverse()[0]

        max = parseFloat(max.toFixed(2));

        console.log("FROM CUSTOM HOOK ### MAX IS:   ", max)

        let colorsObject: any = {};
        Object.keys(emotions)
            .forEach((key) => {
                colorsObject[key] = "";
                if(parseFloat(emotions[key].toFixed(2)) === max){
                    colorsObject[key] = "#000000";
                }                
            });
        setEmotionValueColors(colorsObject);        
    },
        [changingValue]
    );

    return emotionValueColors;
};

export const useMaxValueClass = ( //DRY
    changingValue: string, 
    emotions: {[key: string]: number}, 
    initialState: EmotionStringValues,
    getMaxValue: Function
) => {
    const[emotionValueClasses, setEmotionValueClasses] = useState(initialState);
    useEffect(() => {
        let max: any = getMaxValue(emotions);
        max = parseFloat(max.toFixed(2));
        
        console.log("FROM CUSTOM HOOK ### MAX IS:   ", max)

        let classObject: any = {};

        Object.keys(emotions)
        .forEach((key) => {
            classObject[key] = "non-max";
            if(parseFloat(emotions[key].toFixed(2)) === max){
                classObject[key] = "max";
            }                
        });
        setEmotionValueClasses(classObject); 
    },
        [changingValue]
    );
    return emotionValueClasses;
}

export const useSentimentColor = (sentiment: string, positiveSentiment: string, negativeSentiment: string, positiveColor: string, negativeColor: string, defaultColor: string) => {
    const [color, setColor] = useState(defaultColor);
    useEffect(() => {
        if(sentiment === positiveSentiment) setColor(positiveColor);
        if(sentiment === negativeSentiment) setColor(negativeColor);        
    },
        [sentiment]
    );

    return color;
}