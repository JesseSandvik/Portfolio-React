import './About.css';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollToTop from '../utils/ScrollToTop';

export default function About({ initialMotion, animateMotion, exitMotion, transition }) {
    const [techView, setTechView] = useState("front");

    useEffect(() => {
        let techViewTimer = 
            setTimeout(() => {
                if (techView === "front") {
                    setTechView("back");
                } else if (techView === "back") {
                    setTechView("misc");
                } else if (techView === "misc") {
                    setTechView("front")
                }
            }, 9000);
            return () => {
                clearTimeout(techViewTimer);
            };
    }, [techView]);

    const techViewLeftHandler = (event) => {
        event.preventDefault();
        if (techView === "front") {
            setTechView("misc");
            clearTimeout();
        } else if (techView === "back") {
            setTechView("front");
            clearTimeout();
        } else if (techView === "misc") {
            setTechView("back");
            clearTimeout();
        }
    }

    const techViewRightHandler = (event) => {
        event.preventDefault();
        if (techView === "front") {
            setTechView("back");
            clearTimeout();
        } else if (techView === "back") {
            setTechView("misc");
            clearTimeout();
        } else if (techView === "misc"){
            setTechView("front");
            clearTimeout();
        }
    }

    return (
        <>
        <ScrollToTop />
        <motion.article
            initial={initialMotion}
            animate={animateMotion}
            exit={exitMotion}
            transition={transition}
            className="about">
            <h1><small>A Little Bit</small> About <small>Me</small></h1>
            <div className="about-body">
                <div className="about-left">
                    <h2>Bio</h2>
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
                </div>
                <div className="about-right">
                    <h2>
                        <i
                            className="fas fa-caret-square-left"
                            onClick={techViewLeftHandler}
                        ></i>
                        Skills
                        <i
                            className="fas fa-caret-square-right"
                            onClick={techViewRightHandler}
                        ></i>
                    </h2>
                    {techView === "front" && (
                        <motion.div 
                            className="item"
                            initial={initialMotion}
                            animate={animateMotion}
                            exit={exitMotion}
                            transition={transition}
                        >
                            <h3>Frontend</h3>
                            <p>JavaScript(ES6)</p>
                            <p>React, React Router, React Hooks</p>
                            <p>HTML(5)</p>
                            <p>CSS(3), Bootstrap, SASS/SCSS</p>
                        </motion.div>
                    )}
                    {techView === "back" && (
                        <motion.div
                            className="item"
                            initial={initialMotion}
                            animate={animateMotion}
                            exit={exitMotion}
                            transition={transition}
                        >
                            <h3>Backend</h3>
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>REST APIs</p>
                            <p>Knex</p>
                            <p>PostgreSQL</p>
                        </motion.div>
                    )}
                    {techView === "misc" && (
                        <motion.div
                            className="item"
                            initial={initialMotion}
                            animate={animateMotion}
                            exit={exitMotion}
                            transition={transition}
                        >
                            <h3>Misc</h3>
                            <p>Node Package Manager(NPM)</p>
                            <p>Jest</p>
                            <p>React Testing Library</p>
                            <p>Mocha & Chai</p>
                            <p>Git</p>
                            <p>GitHub</p>
                            <p>Vercel</p>
                            <p>Heroku</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.article>
        </>
    );
};