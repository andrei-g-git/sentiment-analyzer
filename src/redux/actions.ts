import {
    SENTIMENT_CHANGED,
    CONFIDENCE_CHANGED,
    TEXT_AREA_CHANGED
} from "./actionTypes";

import {
    StringPayload,
    NumberPayload
} from "./interface/reduxInderface";


export const sentimentChanged = (sentiment: string): StringPayload => {
    return {
        type: SENTIMENT_CHANGED,
        payload: sentiment
    };
};

export const confidenceChanged = (confidence: number): NumberPayload => {
    return {
        type: CONFIDENCE_CHANGED,
        payload: confidence
    };
};

export const textAreaChanged = (text: string): StringPayload => {
    return {
        type: TEXT_AREA_CHANGED,
        payload: text
    };
};