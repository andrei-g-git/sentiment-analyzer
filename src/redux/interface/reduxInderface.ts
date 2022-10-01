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

export interface ReduxAction {
    type: string,
    payload: any
}

export interface ResultsState {
    sentiment: string,
    confidence: number,
    analysisText: string
}