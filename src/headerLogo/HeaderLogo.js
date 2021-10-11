import "./HeaderLogo.scss";

import React from "react";

import { timeOfDayByHour } from "../utils/TimeOfDay";

function HeaderLogo() {

    function displayIconByTimeOfDay() {
        let timeOfDay = timeOfDayByHour();

        if (timeOfDay === "morning") {
            return <i className="far fa-sun icon"></i>;

        } else if (timeOfDay === "afternoon") {
            return <i className="fas fa-sun icon"></i>;

        } else if (timeOfDay === "evening") {
            return <i className="far fa-moon icon"></i>;

        } else {
            return <></>;
        }

    };

    return (
        <div className="logo">
            <div className="logo-name">
                jesse<strong>sandvik</strong>{displayIconByTimeOfDay()}
            </div>
            <small className="logo-description">Software Developer</small>
        </div>
    );
}

export default HeaderLogo;