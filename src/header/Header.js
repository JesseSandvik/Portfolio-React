import "./Header.scss";

import React from "react";
import { useHistory } from "react-router-dom";

import { timeOfDayByHour } from "../utils/timeOfDay/index";
import SocialIcons from "../utils/SocialIcons";

function Header() {
    const history = useHistory();

    const logoClickHandler = () => {
        history.push("/");
    }

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
        <div className="header">
        <div className="logo"
             onClick={logoClickHandler}>
            <div className={timeOfDayByHour()}>
                {displayIconByTimeOfDay()}
                jesse
                <span className="logo-lastname"><strong>sandvik</strong></span>.
            </div>
        </div>
        <small className="description">Software Developer</small>
                <SocialIcons />
    </div>
    );
}

export default Header;