import "./Home.scss";

import React from "react";

import ClockMessage from "../utils/ClockMessage";

function Home() {
    return (
        <div className="home">
            <div className="home-item item1">
                <ClockMessage />
                <hr />
            </div>
            <div className="home-item item2"></div>
        </div>
    );
}

export default Home;