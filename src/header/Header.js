import './Header.css';
import React from 'react';
import classNames from '../utils/ClassNames';
import HeaderLogo from '../headerLogo/HeaderLogo';
import SocialIcons from '../utils/SocialIcons';

export default function Header(props) {
    return (
        <header className={classNames({
            "": props.backgroundToggle,
            "open": !props.backgroundToggle,
            })
        }
        >
            <div className="logo">
                <HeaderLogo
                    backgroundToggle={props.backgroundToggle}
                    timeOfDayString={props.timeOfDayString}
                    toggleTimeOfDayColor={props.toggleTimeOfDayColor}
                />
            </div>
            <div className="social">
                <SocialIcons />
            </div>
        </header>
    );
};