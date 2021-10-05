import "./About.scss";

import React from "react";

import OfficeSelf from "../images/self-office2-nobg.png";

import DeveloperIcons from "../utils/DeveloperIcons";

function About() {
    return (
        <div className="about">
            <div className="about-title"><h1>About</h1></div>
            <h2 className="about-section_title">Bio</h2>
            <div className="about-bio">
            <p className="about-paraphrase">I am a <strong>full-stack software engineer</strong> who specializes in <strong>front-end web development</strong>.</p>
            <img src={OfficeSelf} alt="Jesse Sandvik smiling" />
                <p>I graduated from <b>Thinkful's Full-Stack Engineering Flex program</b> in the late summer of 2021.
                    During my time at Thinkful, I learned what it means to be a developer, from working through
                    complex <b>algorithms</b> and <b>data structures</b>, to <b>RESTFUL API</b> principles and the concept of <b>test-driven
                    development</b>. It was a difficult, yet extremely rewarding journey.
                </p>
                <p>Which brings me to today. I am currently employed as a master-certified diagnostic technician for Mercedes-Benz.
                    The thing I have long loved about my work is the same thing that excites me most about software development;
                </p>
                <p>my <i>passion</i> for <b>problem-solving</b>.</p>
                <p>There is nothing that I love more than working through complex problems, learning the subtle nuances of different
                    systems and components, and marveling in the incredible engineering feats that we as human-beings have managed to develop.
                </p>
            </div>
            <br />
            <h2 className="about-section_title">Skills</h2>
            <div className="about-skills">
            <p className="about-paraphrase">Some of the technical skills and technologies I've worked with thus far.</p>
            <DeveloperIcons />
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
    );
}

export default About;