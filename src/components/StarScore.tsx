import fullStar from "../assets/img/full-star.png";
import blankStar from "../assets/img/blank-star.png";
import "../css/StarScore.scss";

function StarScore(props: any) {

    //console.log("star classes:   \n ------------- \n", JSON.stringify(getStarClasses(props.stars)))

    return (
        <div>
            {
                getStars(props.stars).map((item) => 
                    <img className={item.class}
                        src={item.src}
                        alt={item.class.length ? item.class.replace("-", " ") : "n/a"}
                    >
                    </img>
                )
            }
        </div>
    );
}

const getStarsFromFloat = (score: number): number[] => {
    const starIndex = Math.floor(score);
    return [...Array(starIndex).map((x: number) => 0)];
}

const getStars = (starNumber: number): {class: string, src: string}[] => {
    // return [...Array(5).map((element, index) => {
    //     const starIndex = index + 1;
    //     if(starNumber <= starIndex){
    //         return {
    //             class: "full-star",
    //             src: fullStar
    //         }
    //     }
    //     return {
    //         class: "blank-star",
    //         src: blankStar
    //     }
    // })];

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
        console.log("star content at ", i, "\n", stars[i - 1])
    }
    return stars;
}
export default StarScore;