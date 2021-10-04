import "./About.scss";

import React from "react";

import OfficeSelf from "../images/self-office2-nobg.png";

function About() {
    return (
        <div className="about">
            <div className="about-title"><h1>About</h1></div>
            <div className="about-body">
                <h2 className="about-bio_title">Bio</h2>
                <div className="about-bio_body">
                    <p>I am a full-stack software engineer who specializes in front-end web development.</p>
                    <img src={OfficeSelf} alt="Jesse Sandvik smiling" />
                    <p>I graduated from Thinkful's Full-Stack Engineering Flex program in the late summer of 2021.
                        During my time at Thinkful, I learned what it means to be a developer, from working through
                        complex algorithms and data structures, to RESTFUL API principles and the concept of test-driven
                        development. It was a difficult, yet extremely rewarding journey.
                    </p>
                    <p>Which brings me to today. I am currently employed as a master-certified diagnostic technician for Mercedes-Benz.
                        The thing I have long loved about my work is the same thing that excites me most about software development;
                    </p>
                    <p>my passion for <b>problem-solving</b>.</p>
                    <p>There is nothing that I love more than working through complex problems, learning the subtle nuances of different
                        systems and components, and marveling in the incredible engineering feats that we as human-beings have developed.
                    </p>
                </div>
                <div className="about-skills">
                    <ul className="about-skills_front">
                        <h3 className="about-skills_title">Front-End Skills</h3>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React Router</li>
                        <li>React Hooks</li>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>Bootstrap</li>
                        <li>SASS/SCSS</li>
                    </ul>
                    <ul className="about-skills_back">
                        <h3 className="about-skills_title">Back-End Skills</h3>
                        <li>REST APIs</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>SQL</li>
                    </ul>
                    <ul className="about-skills_misc">
                        <h3 className="about-skills_title">Miscellaneous Skills</h3>
                        <li>Node Package Manager(NPM)</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Mocha, Chai</li>
                        <li>Jest</li>
                        <li>React Testing Library</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;