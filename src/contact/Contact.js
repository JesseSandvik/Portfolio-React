import React from "react";
import EmailForm from "../utils/EmailForm";

export default function Contact() {
    return (
        <article>
            <h1>Contact</h1>
            <h2>Networking & Inquiries</h2>
            <small>Connect with me on social media or send me an email!</small>
            <h3>Email</h3>
            <small>Email me directly!</small>
            <EmailForm />
        </article>
    );
};