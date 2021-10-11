import "./Contact.scss";

import React from "react";

function Contact() {
    return (
        <section className="contact">
            <h1>Contact</h1>
            <h2>Networking & Inquiries</h2>
            <small>Connect with me on social media or send me an email!</small>
            <h3>Email</h3>
            <small>Email me directly!</small>
            <a href="mailto: sandvikjesse@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-at icon"></i>
            </a>
            <h3>LinkedIn</h3>
            <small>Connect with me on linkedIn!</small>
            <a href="https://www.linkedin.com/in/jesse-sandvik-3b91b620a/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in icon"></i>
            </a>
        </section>
    );
}

export default Contact;