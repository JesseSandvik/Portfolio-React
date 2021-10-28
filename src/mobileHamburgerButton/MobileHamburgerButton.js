import './MobileHamburgerButton.css';
import React, { useState } from 'react';
import classNames from '../utils/ClassNames';
import MobileNavigation from '../mobileNavigation/MobileNavigation';

export default function MobileHamburgerButton() {
    const [navOpen, setNavOpen] = useState(false);

    const navToggleHandler = () => {
        (!navOpen ? setNavOpen(true) : setNavOpen(false));
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
            {<MobileNavigation
                navOpen={navOpen}
                navToggleHandler={navToggleHandler}
            />
            }
        </div>
    );
};