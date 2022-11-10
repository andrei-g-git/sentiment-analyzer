import github from "../../assets/img/github.png";
import twitter from "../../assets/img/twitter.png";
//import backslash from "../../assets/img/backslash.png";
import "./Social.scss";

function Social() {
    return (
        <div className="social-container">
            <a href="https://github.com/andrei-g-git">
                <img className="social-media-icon"
                    src={github}
                    alt="git"
                />                
            </a>
            <div className="backslash"/>
            <a href="">
                <img className="social-media-icon"
                    src={twitter}
                    alt="twitter"
                />                
            </a>
        </div>
    );
};

export default Social;