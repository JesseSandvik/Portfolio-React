import React from "react";
import { motion } from 'framer-motion';
import EmailForm from "../utils/EmailForm";
import contactOne from '../images/contact.png';
import ScrollToTop from '../utils/ScrollToTop';

export default function Contact({ initialMotion, animateMotion, exitMotion, transition }) {
    const buttonLinkHandler = () => {
        window.open("https://www.linkedin.com/in/jesse-sandvik/");
    };

    return (
        <>
        <ScrollToTop />
        <motion.article
            className="contact"
            initial={initialMotion}
            animate={animateMotion}
            exit={exitMotion}
            transition={transition}
        >
            <h1>Contact</h1>
            <img src={contactOne} alt="Coffee and Keyboard" />
            <h2>Connect With Me!</h2>
            <p>I am always open to networking opportunities!</p>
            <p>Feel free to connect with me or send me a message. I'm usually very responsive and should get back to you within a day or so.</p>
            <button title="https://www.linkedin.com/in/jesse-sandvik/" onClick={buttonLinkHandler} >
                    <i className="fab fa-linkedin-in"></i>
                    <small>https://www.linkedin.com/in/jesse-sandvik/</small>
            </button>
            <h2>Email Me Directly!</h2>
            <p>I am usually very responsive, you should expect to hear back from me within 12 to 24 hours of receiving your message.</p>
            <EmailForm />
        </motion.article>
        </>
    );
};