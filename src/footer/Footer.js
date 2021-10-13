import "./Footer.scss";

import React from "react";

import PortfolioOwnerName from "../portfolioOwnerName/PortfolioOwnerName";
import SocialIcons from "../utils/SocialIcons";

function Footer() {
    return (
        <footer>
            &copy;
            <PortfolioOwnerName />
            <span className="year">2021</span>
            <SocialIcons />
        </footer>
    );
}

export default Footer;