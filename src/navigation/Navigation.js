import "./Navigation.scss";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import SocialIcons from "../utils/SocialIcons";

function Navigation() {
    const [homeActive, setHomeActive] = useState(true);
    const [aboutActive, setAboutActive] = useState(false);
    const [projectsActive, setProjectsActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);

    const homeActiveHandler = () => {
        if(!homeActive) {
            setHomeActive(true);
            setAboutActive(false);
            setProjectsActive(false);
            setContactActive(false);
        } else {
            setHomeActive(false);
        }
    }

    const aboutActiveHandler = () => {
        if(!aboutActive) {
            setHomeActive(false);
            setAboutActive(true);
            setProjectsActive(false);
            setContactActive(false);
        } else {
            setAboutActive(false);
        }
    }

    const projectsActiveHandler = () => {
        if(!projectsActive) {
            setHomeActive(false);
            setAboutActive(false);
            setProjectsActive(true);
            setContactActive(false);
        } else {
            setProjectsActive(false);
        }
    }

    const contactActiveHandler = () => {
        if(!contactActive) {
            setHomeActive(false);
            setAboutActive(false);
            setProjectsActive(false);
            setContactActive(true);
        } else {
            setContactActive(false);
        }
    }

    return (
        <nav className="nav">
            <ul className="nav-menu">
                <li className="nav-menu_item">
                    <NavLink
                        className="nav-menu_item link"
                        activeClassName="link-active"
                        onClick={homeActiveHandler}
                        exact={true}
                        to="/"
                        >
                        Home({homeActive ? <i className="fas fa-meteor"></i> : null})
                    </NavLink>
                </li>
                <li className="nav-menu_item">
                    <NavLink
                        className="nav-menu_item link"
                        activeClassName="link-active"
                        onClick={aboutActiveHandler}
                        to="/about"
                        >
                        About({aboutActive ? <i className="fas fa-meteor"></i> : null})
                    </NavLink>
                </li>
                <li className="nav-menu_item">
                    <NavLink
                    className="nav-menu_item link"
                    activeClassName="link-active"
                    onClick={projectsActiveHandler}
                    to="/projects"
                    >
                    Projects({projectsActive ? <i className="fas fa-meteor"></i> : null})
                    </NavLink>
                </li>
                <li className="nav-menu_item">
                    <NavLink
                    className="nav-menu_item link"
                    activeClassName="link-active"
                    onClick={contactActiveHandler}
                    to="/contact"
                    >
                    Contact({contactActive ? <i className="fas fa-meteor"></i> : null})
                    </NavLink>
                </li>
            </ul>
            <SocialIcons />
        </nav>
    );
}

export default Navigation;