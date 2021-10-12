import "./HeaderLogo.scss";

import React from "react";

function HeaderLogo(props) {

    function displayIconByTimeOfDay(timeOfDay) {

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
                jesse<strong>sandvik</strong><div onClick={props.toggleTimeOfDayColor}>{displayIconByTimeOfDay(props.getTimeOfDay())}</div>
            </div>
            <small className="logo-description">Software Developer</small>
        </div>
    );
}

export default HeaderLogo;