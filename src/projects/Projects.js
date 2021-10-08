import "./Projects.scss";

import React from "react";

import { projects } from "../utils/data/Projects";

import Project from "./Project";

function Projects() {
    const projectsList = projects.map((project) => <ul className="projects-list" key={project.id}><Project project={project}/></ul>);

    return (
        <div className="projects">
            <div className="projects-title"><h1>Projects</h1></div>
            <h2 className="projects-recent_title">Recent</h2>
            <p className="projects-paraphrase">A collection of some recent applications.</p>
            <br />
            {projectsList}
        </div>
    );
}

export default Projects;