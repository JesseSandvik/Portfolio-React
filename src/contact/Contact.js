import React from "react";
import EmailForm from "../utils/EmailForm";

export default function Contact() {
    return (
        <article className="contact">
            <h1>Contact</h1>
            <h2>Email</h2>
            <small>Email me directly!</small>
            <EmailForm />
        </article>
    );
};