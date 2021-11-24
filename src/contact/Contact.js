import './Contact.css';
import React from "react";
import { motion } from 'framer-motion';
import EmailForm from "../utils/EmailForm";
import ScrollToTop from '../utils/ScrollToTop';

export default function Contact({ initialMotion, animateMotion, exitMotion, transition }) {
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
            <h1><small>Fill Out This Form To</small>Contact<small>Me</small></h1>
            <p>I am usually very responsive. You can expect to hear back from me within 12 to 24 hours of receiving your message.</p>
            <EmailForm />
        </motion.article>
        </>
    );
};