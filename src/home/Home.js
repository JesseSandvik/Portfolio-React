import "./Home.scss";

import React from "react";

import DeveloperIcons from "../utils/DeveloperIcons";

function Home() {
    return (
        <div className="home">
            <div className="home-intro">
                <p>I am a <strong>full-stack software developer</strong> specializing in <strong>front-end web development</strong>.</p>
                <DeveloperIcons />
                <p>I'm here to help you solve problems, one line of code at a time.</p>
            </div>
        </div>
    );
}

export default Home;