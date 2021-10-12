import "./Layout.scss";
import React, { useState } from "react";

import DynamicBackground from "../dynamicBackground/DynamicBackground";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MobileHamburgerButton from "../mobileHamburgerButton/MobileHamburgerButton";
import Navigation from "../navigation/Navigation";
import Routes from "./Routes";
import { timeOfDayByHour } from "../utils/TimeOfDay";
import classNames from "../utils/ClassNames";

function Layout() {
    const [backgroundToggle, setBackgroundToggle] = useState(true);

    const backgroundToggleHandler = () => {
        if (!backgroundToggle) {
            setBackgroundToggle(true);
        } else {
            setBackgroundToggle(false);
        }
    }
    
    const layoutClassNameByTime = () => {
        if (timeOfDayByHour()) {
            return `layout ${timeOfDayByHour()}`;
        }
        return null;
    }

    return (
        <>
        <div className={classNames({
            "dynbg": backgroundToggle,
            "dynbg open": !backgroundToggle,
        })}>
            <DynamicBackground
                backgroundToggle={backgroundToggle}
                backgroundToggleHandler={backgroundToggleHandler}
            />
        </div>
        <div className={classNames({
            "app": backgroundToggle,
            "app open": !backgroundToggle,
        })}>
        <div className={layoutClassNameByTime()}>
            <div className="layout-item item1"><Header /></div>
            <div className="layout-item item2">
                <span className="mobile"><MobileHamburgerButton /></span>
                <span className="desktop"><Navigation /></span>
            </div>
            <div className="layout-item item3"><Routes /></div>
            <div className="layout-item item4"><Footer /></div>
            </div>
        </div>
        </>
    )
}

export default Layout;