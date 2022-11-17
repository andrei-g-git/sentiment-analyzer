export interface NumberPayload {
    type: string, 
    payload: number
}

export interface BooleanPayload {
    type: string, 
    payload: boolean
}

export interface StringPayload {
    type: string,
    payload: string
}

export interface EmotionPayload {
    type: string,
    payload: /* Emotions */HasStringKeys<string | number>
}
export interface ReduxAction {
    type: string,
    payload: any
}

export interface ResultsState {
    sentiment: string,
    confidence: number,
    analysisText: string,
    subjectivity: number,
    score: number,
    emotions: /* Emotions */HasStringKeys<string | number>,
    loading: boolean
}

export interface Emotions {
    fear: string | number,
    anger: string | number,
    //anticipation: string | number,
    anticip: string | number,
    trust: string | number,
    surprise: string | number,
    positive: string | number,
    negative: string | number,
    sadness: string | number,
    disgust: string | number,
    joy: string | number
}

export interface HasStringKeys<T>{
    [key: string]: T
}