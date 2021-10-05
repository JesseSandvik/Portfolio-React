import "./MobileNavigation.scss";

import React from "react";
import { NavLink } from "react-router-dom";

import classNames from "../utils/ClassNames";

function MobileNavigation(props) {

    return (
        <nav className={classNames({
            "mobileNav": !props.navOpen,
            "mobileNav open": props.navOpen,
        })}>
            <ul className="mobileNav-menu">
                <li className="mobileNav-menu_item">
                    <NavLink
                        className="mobileNav-menu_item link"
                        activeClassName="link-active"
                        onClick={props.navToggleHandler}
                        exact={true}
                        to="/"
                        >
                        Home
                    </NavLink>
                </li>
                <li className="mobileNav-menu_item">
                    <NavLink
                        className="mobileNav-menu_item link"
                        activeClassName="link-active"
                        onClick={props.navToggleHandler}
                        to="/about"
                        >
                        About
                    </NavLink>
                </li>
                <li className="mobileNav-menu_item">
                    <NavLink
                    className="mobileNav-menu_item link"
                    activeClassName="link-active"
                    onClick={props.navToggleHandler}
                    to="/projects"
                    >
                    Projects
                    </NavLink>
                </li>
                <li className="mobileNav-menu_item">
                    <NavLink
                    className="mobileNav-menu_item link"
                    activeClassName="link-active"
                    onClick={props.navToggleHandler}
                    to="/contact"
                    >
                    Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MobileNavigation;