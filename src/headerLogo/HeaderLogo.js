import React from 'react';

export default function HeaderLogo(props) {
    const { timeOfDayString, toggleTimeOfDayColor } = props;

    function setTitleByTimeOfDay() {
        let titleByTimeOfDay = "";
        if (timeOfDayString === "morning") {
            titleByTimeOfDay = "morning icon";
        } else if (timeOfDayString === "afternoon") {
            titleByTimeOfDay = "afternoon icon";
        } else if (timeOfDayString === "evening") {
            titleByTimeOfDay = "evening icon";
        } else {
            titleByTimeOfDay = "";            
        }
        return titleByTimeOfDay;
    };

    function setClassNameByTimeOfDay() {
        let classNameByTimeOfDay = "";
        if (timeOfDayString === "morning") {
            classNameByTimeOfDay = "far fa-sun";
        } else if (timeOfDayString === "afternoon") {
            classNameByTimeOfDay = "fas fa-sun";
        } else if (timeOfDayString === "evening") {
            classNameByTimeOfDay = "far fa-moon";
        } else {
            classNameByTimeOfDay = "";            
        }
        return classNameByTimeOfDay;
    };

    function setMessageByTimeOfDay() {
        let messageByTimeOfDay = "";
        if (timeOfDayString === "morning") {
            messageByTimeOfDay = "Good Morning"
        } else if (timeOfDayString === "afternoon") {
            messageByTimeOfDay = "Good Afternoon"
        } else if (timeOfDayString === "evening") {
            messageByTimeOfDay = "Good Evening"
        } else {
            messageByTimeOfDay = "";            
        }
        return messageByTimeOfDay;
    }

    return (
        <div className="devLogo" onClick={props.toggleTimeOfDayColor}>
            <div className="siteTitle">
                <h1>Jesse <strong>Sandvik</strong></h1>
                <small>Software Developer</small>
            </div>
            <div className="landingTitle">
                <i
                    title={setTitleByTimeOfDay()}
                    className={setClassNameByTimeOfDay()}
                    onClick={toggleTimeOfDayColor}
                    >
                </i>
                <small className="timeMessage">
                    {setMessageByTimeOfDay()}
                </small>
            </div>
        </div>
    );
};