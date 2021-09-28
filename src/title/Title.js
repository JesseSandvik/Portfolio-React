import "./Title.scss";

import React from "react";

import ClockGreetingMessage from "../utils/ClockGreetingMessage";

function Title() {
    
    return (
        <div className="title">
            <div className="title-item item1">
                <small>Hello, and welcome!</small>
            </div>
            <div className="title-item item2">
                <small>My name is</small>
            </div>
            <div className="title-item item3">
                <ClockGreetingMessage />
            </div>
        </div>
    );
}

export default Title;