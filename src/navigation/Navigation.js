import "./Navigation.scss";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { timeOfDayByHour } from "../utils/timeOfDay/index";

function Navigation() {

    const navigationLinks = {
        homeActive: true,
        aboutActive: false,
        projectsActive: false,
        contactActive: false,
    };

    const [navigationLinkActive, setNavigationLinkActive] = useState(navigationLinks);

    return (
        <nav className="nav">
            <ul className="nav-menu">
                <li className="nav-menu_item">
                    <NavLink
                        className="nav-menu_item link"
                        activeClassName="link-active"
                        onClick={() => setNavigationLinkActive({
                            homeActive: true,
                            aboutActive: false,
                            projectsActive: false,
                            contactActive: false,
                        })}
                        exact={true}
                        to="/"
                        >
                        Home{navigationLinkActive.homeActive && <i className="fas fa-code icon"></i>}
                    </NavLink>
                </li>
                <li className="nav-menu_item">
                    <NavLink
                        className="nav-menu_item link"
                        activeClassName="link-active"
                        onClick={() => setNavigationLinkActive({
                            homeActive: false,
                            aboutActive: true,
                            projectsActive: false,
                            contactActive: false,
                        })}
                        to="/about"
                        >
                        About{navigationLinkActive.aboutActive && <i className="fas fa-code icon"></i>}
                    </NavLink>
                </li>
                <li className="nav-menu_item">
                    <NavLink
                    className="nav-menu_item link"
                    activeClassName="link-active"
                    onClick={() => setNavigationLinkActive({
                        homeActive: false,
                        aboutActive: false,
                        projectsActive: true,
                        contactActive: false,
                    })}
                    to="/projects"
                    >
                    Projects{navigationLinkActive.projectsActive && <i className="fas fa-code icon"></i>}
                    </NavLink>
                </li>
                <li className="nav-menu_item">
                    <NavLink
                    className="nav-menu_item link"
                    activeClassName="link-active"
                    onClick={() => setNavigationLinkActive({
                        homeActive: false,
                        aboutActive: false,
                        projectsActive: false,
                        contactActive: true,
                    })}
                    to="/contact"
                    >
                    Contact{navigationLinkActive.contactActive && <i className="fas fa-code icon"></i>}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;