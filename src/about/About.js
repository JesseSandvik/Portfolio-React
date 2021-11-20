import './About.css';
import React from 'react';
import { motion } from 'framer-motion';
import officeSelfie from '../images/self-office2-nobg.png';
import DeveloperIcons from '../utils/DeveloperIcons';
import ScrollToTop from '../utils/ScrollToTop';

export default function About({ initialMotion, animateMotion, exitMotion, transition }) {
    return (
        <>
        <ScrollToTop />
        <motion.article
            initial={initialMotion}
            animate={animateMotion}
            exit={exitMotion}
            transition={transition}
            className="about">
            <h1>About</h1>
            <div className="about-top">
                <div>
                <p>
                    My name is Jesse Sandvik, and I am a full-stack software developer from Long Island, NY.
                    I graduated from Thinkful's Full-Stack Engineering Flex program in the summer of 2021.
                </p>
                <p>
                    What began as a hobby has quickly grown into an obsession; I am a natural-born problem
                    solver with a passion for learning.
                </p>
                <p>Software and I were a match made in heaven.</p>
                <p>
                    I have a passion for writing clean, reusable functions and components with an emphasis on letting the code
                    itself tell you a story. There is an inherent elegance to clean, concise code that satisfies the expectations
                    set from reading that story.
                </p>
                </div>
                <div>
                <img
                    src={officeSelfie}
                    alt="Jesse Sandvik"
                />
                </div>
            </div>
            <h2>Technologies</h2>
            <small>Here is a brief overview of some of the technologies I've used up to this point.</small>
            <DeveloperIcons />
            <div className="about-bottom">
                <div className="item">
                    <h3>Frontend</h3>
                    <p>JavaScript(ES6)</p>
                    <p>React, React Router, React Hooks</p>
                    <p>HTML(5)</p>
                    <p>CSS(3), Bootstrap, SASS/SCSS</p>
                </div>
                <div className="item">
                    <h3>Backend</h3>
                    <p>Node.js</p>
                    <p>Express</p>
                    <p>REST APIs</p>
                    <p>Knex</p>
                    <p>PostgreSQL</p>
                </div>
                <div className="item">
                    <h3>Misc</h3>
                    <p>Node Package Manager(NPM)</p>
                    <p>Jest</p>
                    <p>React Testing Library</p>
                    <p>Mocha & Chai</p>
                    <p>Git</p>
                    <p>GitHub</p>
                    <p>Vercel</p>
                    <p>Heroku</p>
                </div>
            </div>
        </motion.article>
        </>
    );
};