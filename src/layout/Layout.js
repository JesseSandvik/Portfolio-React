import "./Layout.scss";
import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Routes from "./Routes";

function Layout() {
    return (
        <div className="layout">
            <div className="layout-item item1"><Header /></div>
            <div className="layout-item item2"><Footer /></div>
            <div className="layout-item item3"><Navigation /></div>
            <div className="layout-item item4"><Routes /></div>
        </div>
    )
}

export default Layout;