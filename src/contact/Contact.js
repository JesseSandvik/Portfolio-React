import "./Contact.scss";

import React from "react";

import EmailForm from "../utils/EmailForm";

function Contact() {
    return (
        <section className="contact">
            <h1>Contact</h1>
            <h2>Networking & Inquiries</h2>
            <small>Connect with me on social media or send me an email!</small>
            <h3>Email</h3>
            <small>Email me directly!</small>
            <EmailForm />
        </section>
    );
}

export default Contact;