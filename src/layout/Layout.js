import React, { useState } from "react";
import DynamicBackground from "../dynamicBackground/DynamicBackground";
import Footer from "../footer/Footer";
import HeaderLogo from "../headerLogo/HeaderLogo";
import MobileHamburgerButton from "../mobileHamburgerButton/MobileHamburgerButton";
import Navigation from "../navigation/Navigation";
import Routes from "./Routes";
import { timeOfDayByHour } from "../utils/TimeOfDay";
import classNames from "../utils/ClassNames";
import SocialIcons from "../utils/SocialIcons";

export default function Layout() {
    const [backgroundToggle, setBackgroundToggle] = useState(true);
    const [timeOfDayManualToggle, setTimeOfDayManualToggle] = useState("");

    const timeOfDayString = getTimeOfDay();

    const backgroundToggleHandler = () => {
        if (!backgroundToggle) {
            setBackgroundToggle(true);
        } else {
            setBackgroundToggle(false);
        }
    }

    function toggleTimeOfDayColor() {
        if (timeOfDayManualToggle === "") {
            setTimeOfDayManualToggle("morning");
        } else if (timeOfDayManualToggle === "morning") {
            setTimeOfDayManualToggle("afternoon");
        } else if (timeOfDayManualToggle === "afternoon") {
            setTimeOfDayManualToggle("evening");
        } else if (timeOfDayManualToggle === "evening") {
            setTimeOfDayManualToggle("morning");
        }
    }

    function getTimeOfDay() {
        let timeOfDay;

        if (timeOfDayManualToggle !== "") {
            timeOfDay = timeOfDayManualToggle;
        } else {
            timeOfDay = timeOfDayByHour();
        }
        return timeOfDay;
    }
    
    
    const classNameByTime = () => {
        if (getTimeOfDay()) {
            return `${getTimeOfDay()}`;
        } else {
            return timeOfDayByHour();
        }
    }
    
    return (
        <div className={classNameByTime()}>
            <div className={classNames({
                "dynbg": backgroundToggle,
                "dynbg open": !backgroundToggle,
                })}
            >
                <DynamicBackground
                    backgroundToggle={backgroundToggle}
                    backgroundToggleHandler={backgroundToggleHandler}
                />
            </div>
            <section>
                <div className={classNames({
                    "desktop": backgroundToggle,
                    "desktop open": !backgroundToggle,
                    })
                }
                >
                    <Navigation />
                </div>
                <main className={classNames({
                    "": backgroundToggle,
                    "open": !backgroundToggle,
                    })
                }
                >
                    <Routes />
                </main>
                <header className={classNames({
                    "": backgroundToggle,
                    "open": !backgroundToggle,
                    })
                }
                >
                    <div className="logo">
                        <HeaderLogo
                            backgroundToggle={backgroundToggle}
                            timeOfDayString={timeOfDayString}
                            toggleTimeOfDayColor={toggleTimeOfDayColor}
                        />
                    </div>
                    <div className="social">
                        <SocialIcons />
                    </div>
                </header>
                <footer className={classNames({
                    "": backgroundToggle,
                    "open": !backgroundToggle,
                    })
                }
                >
                    <Footer 
                        backgroundToggle={backgroundToggle}
                    />
                </footer>
                <div className="mobile">
                    <MobileHamburgerButton />
                </div>
            </section>
        </div>
    );
};

//<div className="mobile"><MobileHamburgerButton /></div>