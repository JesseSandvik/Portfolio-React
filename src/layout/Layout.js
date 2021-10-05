import "./Layout.scss";
import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import MobileNavigation from "../mobileNavigation/MobileNavigation";
import Navigation from "../navigation/Navigation";
import Routes from "./Routes";

function Layout() {
    return (
        <div className="layout">
            <div className="layout-item item1"><Header /></div>
            <div className="layout-item item2"><Footer /></div>
            <div className="layout-item item3"><MobileNavigation /></div>
            <div className="layout-item item4"><Navigation /></div>
            <div className="layout-item item5"><Routes /></div>
        </div>
    )
}

export default Layout;