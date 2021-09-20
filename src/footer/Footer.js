import "./Footer.scss";

import React from "react";

import SocialIcons from "../utils/Social-Icons";

function Footer() {
    return (
        <footer className="footer">
            <h5 className="footer-copyright">Copyright &copy; 2021</h5>
            <SocialIcons />
        </footer>
    );
}

export default Footer;