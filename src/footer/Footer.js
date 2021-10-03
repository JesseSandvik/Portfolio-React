import "./Footer.scss";

import React from "react";

import { timeOfDayByHour } from "../utils/timeOfDay/index";
import SocialIcons from "../utils/SocialIcons";

function Footer() {
    return (
        <footer className="footer">
            <div className={timeOfDayByHour()}>
                &copy; jessesandvik.
                <span className="year">2021</span>
            </div>
            <SocialIcons />
        </footer>
    );
}

export default Footer;