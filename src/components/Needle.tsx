import "../css/Needle.scss";

function Needle(props: any) {

    console.log("RE_RENDER")

    return (
        <div className="needle">
            <style>
                { //maybe I could still scale the gauge and needle if I place media queries here in the from/to properties
                    `
                        @keyframes turn-needle {
                            from{
                                transform: translate(50px, 0)
                                    rotate(calc(20deg - 90deg));
                            }
                            to{
                                transform: translate(50px, 0)
                                    rotate(calc(20deg + ${calcRotation(props.subjectivity)}deg));
                            }
                        }                       
                    `
                }
            </style>
        </div>
    );
}

const calcRotation = (subjectivity: number): number => {
    let angle: number = 0;
    if(subjectivity <= 0.5){
        angle = Math.floor(90 * subjectivity * 2) - 90;
    } else {
        angle = Math.floor(90 * (subjectivity - 0.5) * 2);
    }
    return angle;
};

export default Needle;