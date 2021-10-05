import "./MobileNavigation.scss";

import React, { useState } from "react";

import classNames from "../utils/ClassNames";
import Navigation from "../navigation/Navigation";

function MobileNavigation() {
    const [navOpen, setNavOpen] = useState(false);

    const navToggleHandler = () => {
        if (!navOpen) {
            setNavOpen(true);
        } else {
            setNavOpen(false);
        }

    }
    return (
        <div className="mobile">
            <div className="mobile-menu"
                 onClick={navToggleHandler}
                 >
                <div className={classNames({
                    "mobile-menu_burger": !navOpen,
                    "mobile-menu_burger open": navOpen,
                })}>
                </div>                
            </div>
            {navOpen && <Navigation navToggleHandler={navToggleHandler} />}
        </div>
    );
}

export default MobileNavigation;