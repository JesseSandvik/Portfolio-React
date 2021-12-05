import React, { useState } from "react";
import { motion } from 'framer-motion';
import { timeOfDayByHour } from "../utils/TimeOfDay";
import DynamicBackground from "../dynamicBackground/DynamicBackground";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MobileHamburgerButton from "../mobileHamburgerButton/MobileHamburgerButton";
import Navigation from "../navigation/Navigation";
import Routes from "./Routes";
import classNames from "../utils/ClassNames";
import HomePage from "../homePage/homePage";

export default function Layout() {
    const transition = {
        ease: [1.0, 0.01, -0.05, 0.9],
    };
    
    const initialMotion = {
        opacity: 0,
    };
    
    const animateMotion = {
        opacity: 1,
    };

    const exitMotion = {
        opacity: 0,
    };

    const [backgroundToggle, setBackgroundToggle] = useState(true);
    const [timeOfDayManualToggle, setTimeOfDayManualToggle] = useState(timeOfDayByHour);

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

    function classNameByTime(){
        if (getTimeOfDay()) {
            return `${getTimeOfDay()}`;
        } else {
            return timeOfDayByHour();
        }
    };

    function getTimeOfDay() {
        let timeOfDay;

        if (timeOfDayManualToggle !== "") {
            timeOfDay = timeOfDayManualToggle;
        } else {
            timeOfDay = timeOfDayByHour();
        }
        return timeOfDay;
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
            <HomePage
                backgroundToggle={backgroundToggle}
                backgroundToggleHandler={backgroundToggleHandler}
            />
            <motion.section
                initial={initialMotion}
                animate={animateMotion}
                exit={exitMotion}
                transition={transition}
            >
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
                    <Routes
                        initialMotion={initialMotion}
                        animateMotion={animateMotion}
                        exitMotion={exitMotion}
                        transition={transition}
                    />
                </main>
                <Header
                    backgroundToggle={backgroundToggle}
                    timeOfDayString={timeOfDayString}
                    toggleTimeOfDayColor={toggleTimeOfDayColor}
                />
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
            </motion.section>
        </div>
    );
};

//<div className="mobile"><MobileHamburgerButton /></div>