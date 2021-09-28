import "./Home.scss";

import React from "react";

import BwDesertSelf from "../images/self-office__2_-removebg.png";

import DeveloperIcons from "../utils/DeveloperIcons";

function Home() {
    return (
        <div className="home">
            <div className="home-intro">
                <h2>I am a <strong>full-stack software developer</strong> specializing in <strong>front-end web development</strong>.</h2>
                <DeveloperIcons />
                <h2>I'm here to help you solve problems, one line of code at a time.</h2>
            </div>
            <img src={BwDesertSelf} alt="Jesse Sandvik smiling"/>
        </div>
    );
}

export default Home;