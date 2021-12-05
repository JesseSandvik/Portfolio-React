import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        activeClassName="link-active"
                        exact={true}
                        to="/"
                        >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="link-active"
                        to="/about"
                        >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeClassName="link-active"
                    to="/projects"
                    >
                    Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeClassName="link-active"
                    to="/contact"
                    >
                    Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};