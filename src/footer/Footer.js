import "./Footer.scss";

import React from "react";

import SocialIcons from "../utils/SocialIcons";

function Footer() {
    return (
        <footer>
            &copy; jessesandvik
            <span className="year">2021</span>
            <SocialIcons />
        </footer>
    );
}

export default Footer;