//import { useCount } from "../../ts/generalHooks";
import { useState } from "react";
import fullStar from "../../assets/img/full-star.png";
import blankStar from "../../assets/img/blank-star.png";
import "./StarScore.scss";

function StarScore(props: any) { //stars needs to be float to minimize the chance velues will be equal between renders, so the animation has different keys and re-plays
    // const [count, setCount] = useState(0);
    // setCount(count + 1);

    return (
        <div key={props.stars} >
            {
                getStars(Math.floor(props.stars)).map((item) => 
                    <img className={item.class}
                        src={item.src}
                        alt={item.class.length ? item.class.replace("-", " ") : "n/a"}
                    >
                    </img>
                )
            }
        </div>
    );
};

const getStars = (starNumber: number): {class: string, src: string}[] => {

    let stars = new Array(5);
    for(let i = 1; i <= 5; i++){
        if(i <= starNumber){
            stars.push({
                class: "full-star",
                src: fullStar                
            });
        } else {
            stars.push({
                class: "blank-star",
                src: blankStar                
            });            
        }
    }
    return stars;
}
export default StarScore;