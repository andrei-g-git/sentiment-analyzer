import {createStore, combineReducers} from "redux";
import { resultsReducer } from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const makeStore = () =>{
    const allReducers = combineReducers({
        results: resultsReducer
    });

    return (
        createStore(
            allReducers,
            composeWithDevTools()
        )
    );
}

export {
    makeStore
}