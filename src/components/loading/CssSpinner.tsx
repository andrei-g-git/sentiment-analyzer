import "./CssSpinner.scss";
import "../../css/Common.scss";

function CssSpinner(props: {loading: boolean}) {
    return (
        <div className={"loading-spinner-css" + toggleVisibilityClass(props.loading)}>

        </div>
    );
};

const toggleVisibilityClass = (loading: boolean) => { //only works like this for some reason, can't write directly into tsx
    console.log("FROM SPINNY THING -- loading?    ", loading)
    return loading? "" : " display-none";
}

export default CssSpinner;