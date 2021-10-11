import "./Header.scss";

import React from "react";

import HeaderLogo from "../headerLogo/HeaderLogo";
import Navigation from "../navigation/Navigation";
import SocialIcons from "../utils/SocialIcons";

function Header() {
    return (
        <header>
            <div className="item item1"><HeaderLogo /></div>
            <div className="item item2"><SocialIcons /></div>
        </header>
    );
}

export default Header;