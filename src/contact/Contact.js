import React from "react";
import EmailForm from "../utils/EmailForm";
import contactOne from '../images/contact.png';

export default function Contact() {
    return (
        <article className="contact">
            <h1>Contact</h1>
            <img src={contactOne} alt="Coffee and Keyboard" />
            <h2>Connect with me on LinkedIn!</h2>
            <p>I am always open to networking opportunities!</p>
            <p>Feel free to connect with me or send me a message. I'm usually very responsive and should get back to you within a day or so.</p>
            <div className="item">
                <a title="linkedin link" href="https://www.linkedin.com/in/jesse-sandvik-3b91b620a/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                    https://www.linkedin.com/in/jesse-sandvik/
                </a>
            </div>
            <p>or</p>
            <h2>Fill out the form below to email me directly!</h2>
            <p>I am usually very responsive, you should expect to hear back from me within 12 to 24 hours of receiving your message.</p>
            <EmailForm />
        </article>
    );
};