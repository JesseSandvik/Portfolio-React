import React from "react";

function Project(props) {
    return (
        <li className="project">
            <h3 className="project-name">
                {props.project.name}
                <a href={props.project.website}>
                    <i className="fas fa-link"></i>
                </a>
                <a href={props.project.github}>
                    <i className="fab fa-github-alt"></i>
                </a>
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
                <img key={image.id} src={image.link} alt={image.alt} />
            ))}
        </li>
    );
}

export default Project;