import "./Home.scss";

import React from "react";

import DeveloperIcons from "../utils/DeveloperIcons";

function Home() {
    return (
        <div className="home">
            <div className="home-intro">
                <p><b>Hello</b> and <b>welcome</b>!</p>
                <small>My name is</small>
                <h1><strong>Jesse Sandvik</strong>.</h1>
                </div>
                <div className="home-description">
                <p>I am a </p>
                <h2><strong>full-stack software developer</strong></h2>
                <p>specializing in</p>
                <h2><strong>front-end web development</strong>.</h2>
                <DeveloperIcons />
                <p>I'm here to help you solve problems, one line of code at a time.</p>
            </div>
        </div>
    );
}

export default Home;