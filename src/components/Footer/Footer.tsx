import Contact from './Contact';
import Social from './Social';
import arrowsUp from "../../assets/img/arrows-up.png";
import "./Footer.scss";
import "../../css/Headings.scss";


function Footer() {
    return (
        <div className="footer">
            <Contact />
            <Social />
            <img className="back-to-top"
                src={arrowsUp}
                alt="arrow"
                onClick={() => handleClick()}    
            />   
            <div className="conspicuous-heading">
                Back to top
            </div>         
        </div>
    );
};

const handleClick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

export default Footer;