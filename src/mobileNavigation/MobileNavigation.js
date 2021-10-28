import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from '../utils/ClassNames';

export default function MobileNavigation(props) {

    return (
        <nav className={classNames({
            "": !props.navOpen,
            "open": props.navOpen,
        })}
        >
            <ul>
                <li>
                    <NavLink
                        activeClassName="link-active"
                        onClick={props.navToggleHandler}
                        exact={true}
                        to="/"
                        >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="link-active"
                        onClick={props.navToggleHandler}
                        to="/about"
                        >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeClassName="link-active"
                    onClick={props.navToggleHandler}
                    to="/projects"
                    >
                    Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
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
};