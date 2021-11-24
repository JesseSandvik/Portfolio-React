import './Projects.css';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollToTop from '../utils/ScrollToTop';
import classNames from '../utils/ClassNames';

export default function Projects({ initialMotion, animateMotion, exitMotion, transition }) {
    const [projectDescToggle, setProjectDescToggle] = useState(false);
    const [projectView, setProjectView] = useState("pTables");

    useEffect(() => {
        let projectViewTimer =
        setTimeout(() => {
            if (projectView === "pTables") {
                setProjectView("pTimer");
            } else if (projectView === "pTimer") {
                setProjectView("pTables");
            }
        }, 9000);
        return () => {
            clearTimeout(projectViewTimer);
        };
    }, [projectView]);

    const projectDescToggleHandler = (event) => {
        event.preventDefault();
        (!projectDescToggle ? setProjectDescToggle(true) : setProjectDescToggle(false));
    }

    const projectViewHandler = (event) => {
        event.preventDefault();
        if (projectView === "pTables") {
            setProjectView("pTimer");
            clearTimeout();
        } else if (projectView === "pTimer") {
            setProjectView("pTables");
            clearTimeout();
        }
    }

    return (
        <>
        <ScrollToTop />
        <motion.article
            className="projects"
            initial={initialMotion}
            animate={animateMotion}
            exit={exitMotion}
            transition={transition}
        >
            <h1><small>Some Recent</small>Projects<small>Of Mine</small></h1>
            <div className="projects-body">
                <div className="projects-left">
                    <p>Here are some recent applications I've been working on.</p>
                    <p>Some of these are still in active development,
                        so be sure to stop by from time to time to see how the codebases have matured.
                    </p>
                </div>
                <div className="projects-right">
                    <h2>
                        <i
                            className="fas fa-caret-square-left"
                            onClick={projectViewHandler}
                        ></i>
                            Projects
                        <i
                            className="fas fa-caret-square-right"
                            onClick={projectViewHandler}
                        ></i>
                    </h2>
                    {projectView === "pTables" && (
                        <motion.div
                            className="project"
                            initial={initialMotion}
                            animate={animateMotion}
                            exit={exitMotion}
                            transition={transition}
                        >
                            <h3>Periodic Tables</h3>
                            <small>A restaurant reservation management application.</small>
                            <motion.div
                                onClick={projectDescToggleHandler}
                                whileHover={{ scale: 1.2 }}
                                className={classNames({
                                    "project-main1": !projectDescToggle,
                                    "project-main1 open": projectDescToggle
                                })}
                            >
                                <div>
                                    <p>
                                        Periodic Tables is a restaurant reservation & table management application, where the user can track
                                        reservations & available tables in a restaurant.
                                    </p>
                                    <p>
                                        This application was developed as a tool for restaurants to maintain a well structured and predictable
                                        database of client reservations. Both client reservations and restaurant tables can be created, updated,
                                        and/or deleted from the application interface.
                                    </p>
                                </div>
                            </motion.div>
                            <div className="links">
                                <button onClick={() => window.open("https://reservation-app-client.herokuapp.com/dashboard")}>
                                    <i className="fas fa-link"></i>
                                    <small>App</small>
                                </button>
                                <button onClick={() => window.open("https://github.com/JesseSandvik/Restaurant-Reservations-App")}>
                                    <i className="fab fa-github-alt"></i>
                                    <small>Repo</small>
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {projectView === "pTimer" && (
                        <motion.div
                            className="project"
                            initial={initialMotion}
                            animate={animateMotion}
                            exit={exitMotion}
                            transition={transition}
                        >
                            <h3>Pomodoro Timer</h3>
                            <small>A timer application specifically built to utilize the Pomodoro technique.</small>
                            <motion.div
                                    onClick={projectDescToggleHandler}
                                    whileHover={{ scale: 1.2 }}
                                    className={classNames({
                                        "project-main2": !projectDescToggle,
                                        "project-main2 open": projectDescToggle
                                    })}
                                >
                                <div>
                                    <p>
                                        The pomodoro timer is a timer designed around the work/break interval system of
                                        the pomodoro technique. The pomodoro technique time management system was developed
                                        by Francesco Cirillo in the late 1980s.
                                    </p>
                                    <p>
                                        The technique uses a timer to break work into intervals, traditionally twenty five minutes
                                        in length, separated by short breaks. Each interval is known as a pomodoro, from the italian
                                        word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.
                                    </p>
                                </div>
                            </motion.div>
                            <div className="links">
                                    <button onClick={() => window.open("https://pomodoro-timer-project-three.vercel.app/")}>
                                        <i className="fas fa-link"></i>
                                        <small>App</small>
                                    </button>
                                    <button onClick={() => window.open("https://github.com/JesseSandvik/Pomodoro-Timer-Project")}>
                                        <i className="fab fa-github-alt"></i>
                                        <small>Repo</small>
                                    </button>
                                </div>
                            </motion.div>
                    )}
                </div>
            </div>
        </motion.article>
        </>
    );
};