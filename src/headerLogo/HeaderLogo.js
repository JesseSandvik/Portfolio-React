import "./HeaderLogo.scss";

import React from "react";

import PortfolioOwnerName from "../portfolioOwnerName/PortfolioOwnerName";

function HeaderLogo(props) {

    function displayIconByTimeOfDay(timeOfDay) {

        if (timeOfDay === "morning") {
            return <i title="morning icon" className="far fa-sun icon"></i>;

        } else if (timeOfDay === "afternoon") {
            return <i title="afternoon icon" className="fas fa-sun icon"></i>;

        } else if (timeOfDay === "evening") {
            return <i title="evening icon" className="far fa-moon icon"></i>;

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
                <PortfolioOwnerName />
                <span title="icon">{displayIconByTimeOfDay(props.timeOfDayString)}</span>
            </div>
            <small className="logo-description">Software Developer</small>
        </div>
    );
}

export default HeaderLogo;