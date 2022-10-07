import "../css/Needle.scss";

function Needle(props: any) {

    console.log("RE_RENDER")

    return (
        <div className="needle">
            <style>
                {
                    `
                        @keyframes turn-needle {
                            from{
                                transform: translate(70px, 12px)
                                    rotate(calc(20deg - 90deg));
                            }
                            to{
                                transform: translate(70px, 12px)
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