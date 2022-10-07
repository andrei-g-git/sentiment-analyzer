import SubmitButton from "./SubmitButton";
import "../css/Contact.scss";

function Contact() {
    return (
        <div className="contact">
            <div className="contact-heading">
                Get in touch
            </div>
            <form className="contact-form"
                method="POST"
                action="form url thing goes here"
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
            </form>

            <SubmitButton name="Send!" />
        </div>
    );
}

export default Contact;