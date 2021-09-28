import "./Navigation.scss";

import React from "react";
import { Link } from "react-router-dom";

import SocialIcons from "../utils/SocialIcons";

function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav-menu">
                <li className="nav-menu_item"><Link className="nav-menu_item link">Home(<i className="fas fa-code nav-active"></i>)</Link></li>
                <li className="nav-menu_item"><Link className="nav-menu_item link">About()</Link></li>
                <li className="nav-menu_item"><Link className="nav-menu_item link">Projects()</Link></li>
                <li className="nav-menu_item"><Link className="nav-menu_item link">Contact()</Link></li>
            </ul>
            <SocialIcons />
        </nav>
    );
}

export default Navigation;