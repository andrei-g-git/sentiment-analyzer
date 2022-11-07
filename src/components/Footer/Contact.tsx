import SubmitButton from "../SubmitButton";
import "./Contact.scss";

function Contact() {
    return (
        <div className="contact">
            <div className="contact-heading">
                Get in touch
            </div>
            <form className="contact-form"
                method="POST"
                action="https://forms.un-static.com/forms/241197b722cacb42116f504d5962801292dc2cca"
            >
                <input className="contact-form-input"
                    id="input-name"
                    type="text"
                    name="name"
                    placeholder="Subject"
                />

                <input className="contact-form-input"
                    id="input-email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                />

                <textarea className="contact-form-text-area" 
                    name="message"
                    placeholder="Convey your message here..."
                />

                <SubmitButton name="Send!" />
            </form>
        </div>
    );
}

export default Contact;