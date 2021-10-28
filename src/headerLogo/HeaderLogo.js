import React from 'react';

export default function HeaderLogo(props) {

    function displayIconByTimeOfDay(timeOfDay) {

        if (timeOfDay === "morning") {
            return <i title="morning icon" className="far fa-sun"></i>;

        } else if (timeOfDay === "afternoon") {
            return <i title="afternoon icon" className="fas fa-sun"></i>;

        } else if (timeOfDay === "evening") {
            return <i title="evening icon" className="far fa-moon"></i>;

        } else {
            return <></>;
        }

    };

    return (
        <div  className="devLogo" onClick={props.toggleTimeOfDayColor}>
            <div className="siteTitle">
                <h1>jessesandvik</h1>
                <small>Software Developer</small>
            </div>
            <span>{displayIconByTimeOfDay(props.timeOfDayString)}</span>
        </div>
    );
};