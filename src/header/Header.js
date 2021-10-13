import "./Header.scss";

import React from "react";

import HeaderLogo from "../headerLogo/HeaderLogo";
import SocialIcons from "../utils/SocialIcons";

function Header(props) {
    return (
        <header>
            <div className="item item1"><HeaderLogo
                                            toggleTimeOfDayColor={props.toggleTimeOfDayColor}
                                            timeOfDayString={props.timeOfDayString}
                                        />
            </div>
            <div className="item item2"><SocialIcons /></div>
        </header>
    );
}

export default Header;