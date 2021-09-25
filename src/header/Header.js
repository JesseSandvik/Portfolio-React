import "./Header.scss";

import React from "react";

import ClockIcons from "../utils/ClockIcons";

function Header() {
    return (
        <header className="header">
            <div className="header=icons">
            <ClockIcons />
            <i className="fab fa-grav header-icon"></i>
            </div>
        </header>
    );
}

export default Header;