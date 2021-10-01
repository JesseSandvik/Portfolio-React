import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Routes from "./Routes";
import Title from "../title/Title";

function Layout() {
    return (
        <div className="layout">
            <div className="layout-item item1"><Header /></div>
            <div className="layout-item item2"><Footer /></div>
            <div className="layout-item item3"><Navigation /></div>
            <div className="layout-item item4"><Title /></div>
            <div className="layout-item item5"><Routes /></div>
        </div>
    )
}

export default Layout;