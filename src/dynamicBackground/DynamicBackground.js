import "./DynamicBackground.scss";

import React from "react";

function DynamicBackground(props) {
    return (
        <div className="bg">
            <div className="bg-item bg1"></div>
            <div className="bg-item bg2">
                <h5 onClick={props.backgroundToggleHandler}>open</h5>
            </div>
            <div className="bg-item bg3"></div>
            <div className="bg-item bg4"></div>
        </div>
    );
}

export default DynamicBackground;