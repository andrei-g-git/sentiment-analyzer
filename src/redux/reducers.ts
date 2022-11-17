import { 
    SENTIMENT_CHANGED, 
    CONFIDENCE_CHANGED,
    TEXT_AREA_CHANGED,
    SUBJECTIVITY_CHANGED,
    SCORE_CHANGED ,
    EMOTIONS_CHANGED,
    LOADED
} from "./actionTypes";

import { 
    ResultsState,
    ReduxAction,
    HasStringKeys 
} from "./interface/reduxInderface";

const initialState: ResultsState = {
    sentiment: "n/a",
    confidence: 0,
    analysisText: "",
    subjectivity: 0,
    score: 1,
    // emotions: {
    //     fear: 0,
    //     anger: 0,
    //     //anticipation: 0,
    //     anticip: 0,
    //     trust: 0,
    //     surprise: 0,
    //     positive: 0,
    //     negative: 0,
    //     sadness: 0,
    //     disgust: 0,
    //     joy: 0        
    // }
    emotions: {placeholder: 0},
    loading: false
};

export const resultsReducer = (state: ResultsState = initialState, action: ReduxAction): ResultsState => {
    switch(action.type){
        case SENTIMENT_CHANGED:
            return{
                ...state,
                sentiment: action.payload
            };
        case CONFIDENCE_CHANGED:
            return{
                ...state,
                confidence: action.payload
            };
        case TEXT_AREA_CHANGED:
            return{
                ...state,
                analysisText: action.payload
            };
        case SCORE_CHANGED:
            return{
                ...state,
                score: action.payload
            };     
        case SUBJECTIVITY_CHANGED:
            return{
                ...state,
                subjectivity: action.payload
            };    
        case EMOTIONS_CHANGED:
            return{
                ...state,
                emotions: action.payload
            };
        case LOADED:
            return{
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};