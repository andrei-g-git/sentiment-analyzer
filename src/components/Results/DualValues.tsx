import { useEffect } from "react";
import { useCount } from "../../ts/generalHooks";
import "./DualValues.scss";

type ValueAndColor = {
    value: string | number,
    color: string
}
type ValueAndClass = {
    value: string| number,
    class: string
}

function DualValues(props: any) {
    useEffect(() => {
        console.log("SENTIMENT:  ", props.sentiment)
    }, 
        [props.sentiment]
    )
    
    //let count = useCount([props.score]); //the score is a granular float so the component will update more often, whereas the sentiment is binary and less likely to change

    return (
        <div className="dual-values"
            key={props.score}
        >
            {
                props.values.map((row: ValueAndClass[]) => 
                    <div className="value-row">
                        {
                            row.map((valueObject: ValueAndClass) => 
                                <div className={`result-value ${valueObject.class}`}
                                    //style={{color: valueObject.color}}
                                >
                                    {valueObject.value}
                                </div>                      
                            )                               
                        }
                    </div>
                )
            }
        </div>
    );
}

export default DualValues;