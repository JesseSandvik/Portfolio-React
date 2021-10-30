import "./DynamicBackground.scss";
import React from "react";
import classNames from "../utils/ClassNames";

function DynamicBackground(props) {
    return (
        <div className="bg">
            <div className={classNames({
                "item bg1": props.backgroundToggle,
                "item bg1 open": !props.backgroundToggle,
            })}></div>
            <div className={classNames({
                "item bg2": props.backgroundToggle,
                "item bg2 open": !props.backgroundToggle,
            })}>
                <h5 onClick={props.backgroundToggleHandler}>open</h5>
            </div>
            <div className={classNames({
                "item bg3": props.backgroundToggle,
                "item bg3 open": !props.backgroundToggle,
            })}></div>
            <div className={classNames({
                "item bg4": props.backgroundToggle,
                "item bg4 open": !props.backgroundToggle,
            })}></div>
        </div>
    );
}

export default DynamicBackground;