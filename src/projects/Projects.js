import React from 'react';
import keyboard from '../images/shadow-keyboard.png';
import periodicTablesOne from '../images/projects/periodicTables/PeriodicTables1.png';

export default function Projects() {
    return (
        <article className="projects">
            <h1>Projects</h1>
            <img src={keyboard} alt="computer keyboard" />
            <p>
                Here are some recent applications I've been working on. Some of these are still in active development,
                so be sure to stop by from time to time to see how the codebases have matured.
            </p>
            <h2>Periodic Tables</h2>
            <small>A restaurant reservation management application.</small>
            <img src={periodicTablesOne} alt="Period Tables Dashboard" />
        </article>
    );
};