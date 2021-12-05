import "./DynamicBackground.scss";
import React from "react";
import { useLocation } from "react-router";
import classNames from "../utils/ClassNames";

function DynamicBackground(props) {
    const location = useLocation();

    return (
        <div className="bg">
            <div className={classNames({
                "item bg1": props.backgroundToggle,
                "item bg1 open": !props.backgroundToggle,
            })}
            >
            </div>
            <div className={classNames({
                "item bg2": props.backgroundToggle,
                "item bg2 open": !props.backgroundToggle,
            })}
            >
                {location.pathname === "/" && (
                    <div className="page home">
                    <p>H</p>
                    <p>O</p>
                    <p>M</p>
                    <p>E</p>
                    </div>
                )}
                {location.pathname === "/about" && (
                    <div className="page about">
                    <p>A</p>
                    <p>B</p>
                    <p>O</p>
                    <p>U</p>
                    <p>T</p>
                    </div>
                )}
                {location.pathname === "/projects" && (
                    <div className="page projects">
                    <p>P</p>
                    <p>R</p>
                    <p>O</p>
                    <p>J</p>
                    <p>E</p>
                    <p>C</p>
                    <p>T</p>
                    <p>S</p>
                    </div>
                )}
                {location.pathname === "/contact" && (
                    <div className="page contact">
                    <p>C</p>
                    <p>O</p>
                    <p>N</p>
                    <p>T</p>
                    <p>A</p>
                    <p>C</p>
                    <p>T</p>
                    </div>
                )}
            </div>
            <div className={classNames({
                "item bg3": props.backgroundToggle,
                "item bg3 open": !props.backgroundToggle,
            })}
            >
            </div>
            <div className={classNames({
                "item bg4": props.backgroundToggle,
                "item bg4 open": !props.backgroundToggle,
            })}
            >
            </div>
        </div>
    );
}

export default DynamicBackground;