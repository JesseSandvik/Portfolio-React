import React from "react";

function Project(props) {
    return (
        <li className="project">
            <h3 className="project-name">
                <a href={props.project.link}>
                    <i className="fas fa-link"></i>
                </a>
                {props.project.name}
            </h3>
            <small className="project-description">{props.project.description}</small>
            <br />
            <ul className="project-stack">
                {props.project.stack.build && (
                <li>Built using: {props.project.stack.build}</li>
                )}
                {props.project.stack.front && (
                <li>Frontend: {props.project.stack.front}</li>
                )}
                {props.project.stack.back && (
                <li>Backend: {props.project.stack.back}</li>
                )}
            </ul>
            {props.project.images.map((image) => (
                <img src={image.link} />
            ))}
        </li>
    );
}

export default Project;