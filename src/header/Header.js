import "./Header.scss";

import React from "react";

import { timeOfDayByHour } from "../utils/timeOfDay/index";
import SocialIcons from "../utils/SocialIcons";

function Header() {

    function displayIconByTimeOfDay() {
        let timeOfDay = timeOfDayByHour();

        if (timeOfDay === "morning") {
            return <i className="far fa-sun icon"></i>;

        } else if (timeOfDay === "afternoon") {
            return <i className="fas fa-sun icon"></i>;

        } else if (timeOfDay === "evening") {
            return <i className="far fa-moon icon"></i>;

        } else {
            return null;
        }

    };

    return (
        <div className="header">
            <div className="logo">
                <div className={timeOfDayByHour()}>
                    {displayIconByTimeOfDay()}
                    jesse
                    <span className="logo-name"><strong>sandvik</strong></span>.
                </div>
            </div>
            <small className="description">Software Developer</small>
            <SocialIcons />
        </div>
    );
}

export default Header;