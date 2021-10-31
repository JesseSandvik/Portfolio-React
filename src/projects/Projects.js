import React from 'react';
import { motion } from 'framer-motion';
import keyboard from '../images/shadow-keyboard.png';
import periodicTablesOne from '../images/projects/periodicTables/PeriodicTables1.png';
import pomodoroTimerOne from '../images/projects/pomodoroTimer/PomodoroTimer1.png';
import ScrollToTop from '../utils/ScrollToTop';

export default function Projects({ initialMotion, animateMotion, exitMotion, transition }) {
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
            <h1>Projects</h1>
            <img src={keyboard} alt="computer keyboard" />
            <p>
                Here are some recent applications I've been working on. Some of these are still in active development,
                so be sure to stop by from time to time to see how the codebases have matured.
            </p>
            <div className="project">
                <h2>Periodic Tables</h2>
                <small>A restaurant reservation management application.</small>
                <img src={periodicTablesOne} alt="Period Tables Dashboard" />
                <p>
                    Periodic Tables is a restaurant reservation & table management application, where the user can track
                    reservations & available tables in a restaurant.
                </p>
                <p>
                    This application was developed as a tool for restaurants to maintain a well structured and predictable
                    database of client reservations. Both client reservations and restaurant tables can be created, updated,
                    and/or deleted from the application interface.
                </p>
                <div className="links">
                    <button onClick={() => window.open("https://reservation-app-client.herokuapp.com/dashboard")}>
                        <i className="fas fa-link"></i>
                        <small> Live App</small>
                    </button>
                    <button onClick={() => window.open("https://github.com/JesseSandvik/Restaurant-Reservations-App")}>
                        <i className="fab fa-github-alt"></i>
                        <small> GitHub Repo</small>
                    </button>
                </div>
            </div>
            <div className="project">
                <h2>Pomodoro Timer</h2>
                <small>A timer application specifically built to utilize the Pomodoro technique.</small>
                <img src={pomodoroTimerOne} alt="Pomodoro Timer Application" />
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
                <div className="links">
                    <button onClick={() => window.open("https://pomodoro-timer-project-three.vercel.app/")}>
                        <i className="fas fa-link"></i>
                        <small> Live App</small>
                    </button>
                    <button onClick={() => window.open("https://github.com/JesseSandvik/Pomodoro-Timer-Project")}>
                        <i className="fab fa-github-alt"></i>
                        <small> GitHub Repo</small>
                    </button>
                </div>
            </div>
        </motion.article>
        </>
    );
};