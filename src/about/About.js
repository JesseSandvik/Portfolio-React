import "./About.scss";

import React from "react";

function About() {
    return (
        <div className="about">
            <div className="about-title"><h3>About Me</h3></div>
            <div className="about-body">
                <p>My name is Jesse Sandvik, and I am a full-stack software developer.</p>
                <p>I specialize in front-end web development.</p>
            </div>
        </div>
    );
}

export default About;