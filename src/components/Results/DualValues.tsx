import { useEffect } from "react";
import "./DualValues.scss";

type ValueAndColor = {
    value: string | number,
    color: string
}

function DualValues(props: any) {

    useEffect(() => {
        console.log("SENTIMENT:  ", props.sentiment)
    }, 
        [props.sentiment]
    )
    
    return (
        <div className="dual-values">
            {
                props.values.map((row: ValueAndColor[]) => 
                    <div className="value-row">
                        {
                            row.map((valueObject: ValueAndColor) => 
                                <div className="result-value"
                                    style={{color: valueObject.color}}
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