import {useState, useEffect} from "react";
import {EmotionColors} from "./resultsTypes";

export const useMaxValueColor = (changingValue: string, emotions: {[key: string]: number}, initialState: EmotionColors) => {
    const[emotionValueColors, setEmotionValueColors] = useState(initialState);

    useEffect(() => {
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