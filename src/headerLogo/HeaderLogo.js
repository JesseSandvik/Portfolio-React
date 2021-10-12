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
            <small className="logo-click">Click me!</small>
            <div className="logo-name"
                 onClick={props.toggleTimeOfDayColor}
            >
                jesse<strong>sandvik</strong><div>{displayIconByTimeOfDay(props.getTimeOfDay())}</div>
            </div>
            <small className="logo-description">Software Developer</small>
        </div>
    );
}

export default HeaderLogo;