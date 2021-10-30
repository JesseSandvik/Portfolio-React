import React from 'react';
import { motion } from 'framer-motion';
import DeveloperIcons from '../utils/DeveloperIcons';
import ScrollToTop from '../utils/ScrollToTop';

export default function Home({ initialMotion, animateMotion, exitMotion, transition }) {
    return (
        <>
        <ScrollToTop />
        <motion.article
            initial={initialMotion}
            animate={animateMotion}
            exit={exitMotion}
            transition={transition}
        >
            <h3><b>Welcome to my portfolio!</b></h3>
            <small>My name is</small>
            <h1><strong>Jesse Sandvik</strong>,</h1>
            <p>I am a</p>
            <h2><strong>full-stack software developer</strong></h2>
            <p>specializing in</p>
            <h2><strong>front-end web development</strong>.</h2>
            <DeveloperIcons />
            <p>I'm here to help you solve problems, one line of code at a time.</p>
        </motion.article>
        </>
    );
};