import "./Header.scss";

import React from "react";

import { timeOfDayByTime } from "../utils/timeOfDay/index";
import SocialIcons from "../utils/SocialIcons";

function Header() {
    const time = new Date().getHours();

    function displayIconByTimeOfDay() {
        let timeOfDay = timeOfDayByTime(time);

        if (timeOfDay === "morning") {
            return <i className="fas fa-sun icon"></i>;

        } else if (timeOfDay === "afternoon") {
            return <i className="far fa-sun icon"></i>;

        } else if (timeOfDay === "evening") {
            return <i className="far fa-moon icon"></i>;

        } else {
            return null;
        }

    };

    return (
        <div className="header">
            <div className="logo">
                <div className={timeOfDayByTime(time)}>
                    {displayIconByTimeOfDay()}
                    jesse
                    <span className="logo-name"><strong>sandvik</strong></span> .
                </div>
            </div>
            <SocialIcons />
        </div>
    );
}

export default Header;