import React from "react";

function Project(props) {
    return (
        <article>
            <h3>
                <a href={props.project.website} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-link icon"></i>
                </a>
                {props.project.name}
                <a href={props.project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github-alt icon"></i>
                </a>
            </h3>
            <small>{props.project.description}</small>
            <div>
                <br />
                {props.project.stack.build && (
                <p><span>Built using:</span> {props.project.stack.build}</p>
                )}
                {props.project.stack.front && (
                <p><span>Frontend:</span> {props.project.stack.front}</p>
                )}
                {props.project.stack.back && (
                <p><span>Backend:</span> {props.project.stack.back}</p>
                )}
            </div>
            {props.project.images.map((image) => (
                <img key={image.id} src={image.link} alt={image.alt} />
            ))}
        </article>
    );
}

export default Project;