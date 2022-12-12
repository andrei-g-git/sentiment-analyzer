import { useEffect} from "react";

//using typescript I could cast window to (window as any)

export const useSpeech =(isRecording) => {
    useEffect(() => {
        console.log("recording?  " + isRecording)
        // if(! window.webkitSpeechRecognition && !window.SpeechRecognition){
        //     upgrade(); //not defined ....
        // } else {
        if("SpeechRecognition" in window){
            console.log("has speech")
            let SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
            const speech = new SpeechRecognition();
            speech.continuous = true;
            speech.interimResults = true;
            speech.lang = "en-US";
            if(isRecording){
                speech.start();
            }

            speech.onstart = handleSpeechStart;
            speech.onresult = handleResult;
        }
        
    },
        [isRecording]
    )
}

const handleSpeechStart = () => {

}

const handleResult = (event) => {
    console.log(event.results[0][0]);
}