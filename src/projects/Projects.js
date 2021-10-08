import "./Projects.scss";

import React from "react";

import { projects } from "../utils/data/Projects";

import Project from "./Project";

function Projects() {
    const projectsList = projects.map((project) => <div key={project.id}><Project project={project}/></div>);

    return (
        <section className="projects">
            <h1>Projects</h1>
            <h2>Recent</h2>
            <small>A collection of some recently built applications.</small>
            <br />
            {projectsList}
        </section>
    );
}

export default Projects;