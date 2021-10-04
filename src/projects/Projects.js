import "./Projects.scss";

import React from "react";

import { projects } from "../utils/data/Projects";

import Project from "./Project";

function Projects() {
    const projectsList = projects.map((project) => <ul className="projects-list" key={project.id}><Project project={project}/></ul>);

    return (
        <div className="projects">
            <div className="projects-title"><h1>Projects</h1></div>
            <h2 className="projects-recent_title">Recent Projects</h2>
            <p className="projects-paraphrase">Below is a collection of some recent projects.</p>
            <br />
            {projectsList}
        </div>
    );
}

export default Projects;