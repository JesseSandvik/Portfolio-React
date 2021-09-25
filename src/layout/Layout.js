import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Home from "../home/Home";
import Navigation from "../menu/Navigation";

function Layout() {
    return (
        <div className="layout">
            <div className="layout-item item1"><Header /></div>
            <div className="layout-item item2"><Footer /></div>
            <div className="layout-item item3"><Navigation /></div>
            <div className="layout-item item4"><Home /></div>
        </div>
    )
}

export default Layout;