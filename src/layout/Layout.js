import "./Layout.scss";
import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import MobileHamburgerButton from "../mobileHamburgerButton/MobileHamburgerButton";
import Navigation from "../navigation/Navigation";
import Routes from "./Routes";
import { timeOfDayByHour } from "../utils/TimeOfDay";

function Layout() {
    
    const layoutClassNameByTime = () => {
        if (timeOfDayByHour()) {
            return `layout ${timeOfDayByHour()}`;
        }
        return null;
    }

    return (
        <div className={layoutClassNameByTime()}>
            <div className="layout-item item1"><Header /></div>
            <div className="layout-item item2">
                <span className="mobile"><MobileHamburgerButton /></span>
                <span className="desktop"><Navigation /></span>
            </div>
            <div className="layout-item item3"><Routes /></div>
            <div className="layout-item item4"><Footer /></div>
        </div>
    )
}

export default Layout;