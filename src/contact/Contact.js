import "./Contact.scss";

import React from "react";

function Contact() {
    return (
        <section className="contact">
            <h1 className="contact-title">Contact</h1>
            <h2 className="contact-section_title">Networking & Inquiries</h2>
            <p className="contact-paraphrase">Connect with me on social media or send me an email!</p>
            <div className="contact-item">
            <h3 className="contact-item_title">Email</h3>
            <small>Email me directly!</small>
            <a href="mailto: sandvikjesse@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-at icon"></i>
            </a>
            </div>
            <div className="contact-item">
            <h3 className="contact-item_title">LinkedIn</h3>
            <small>Connect with me on linkedIn!</small>
            <a href="https://www.linkedin.com/in/jesse-sandvik-3b91b620a/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in icon"></i>
            </a>
            </div>
        </section>
    );
}

export default Contact;