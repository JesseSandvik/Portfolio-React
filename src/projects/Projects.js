import React from 'react';
import { projects } from '../utils/data/Projects';
import Project from './Project';

export default function Projects() {
    const projectsList = projects.map((project) => <div key={project.id}><Project project={project}/></div>);

    return (
        <article className="projects">
            <h1>Projects</h1>
            <h2>Recent</h2>
            <small>A collection of some recently built applications.</small>
            <br />
            {projectsList}
        </article>
    );
};