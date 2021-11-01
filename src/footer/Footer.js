import './Footer.css';
import React from 'react';
import classNames from "../utils/ClassNames";
import SocialIcons from "../utils/SocialIcons";

export default function Footer(props) {

    const { backgroundToggle } = props;

    return (
        <div>
            <h6>&copy; jessesandvik 2021</h6>
            <div className={classNames({
                "social": backgroundToggle,
                "social open": !backgroundToggle,
                })
            }
            >
                <SocialIcons />
            </div>
        </div>
    );
};