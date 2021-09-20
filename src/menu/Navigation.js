import "./Navigation.scss";

import React from "react";
import { Link } from "react-router-dom";

import NavIcon from "../images/astro-gold-removebg.png";

function Navigation() {
    return (
        <nav className="nav">
            <img className="nav-icon" src={NavIcon} alt="astronaut icon"/>
                <ul className="nav-menu">
                    <li className="nav-menu_item"><Link className="nav-menu_item link">Home(<i className="fas fa-meteor nav-active"></i>)</Link></li>
                    <li className="nav-menu_item"><Link className="nav-menu_item link">About()</Link></li>
                    <li className="nav-menu_item"><Link className="nav-menu_item link">Projects()</Link></li>
                    <li className="nav-menu_item"><Link className="nav-menu_item link">Contact()</Link></li>
                </ul>
        </nav>
    );
}

export default Navigation;