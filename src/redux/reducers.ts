import { 
    SENTIMENT_CHANGED, 
    CONFIDENCE_CHANGED,
    TEXT_AREA_CHANGED 
} from "./actionTypes";

import { 
    ResultsState,
    ReduxAction 
} from "./interface/reduxInderface";

const initialState: ResultsState = {
    sentiment: "",
    confidence: 0,
    analysisText: ""
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
        default:
            return state;
    }
};