import "./About.scss";

import React from "react";

import { about } from "../utils/data/About";

import DeveloperIcons from "../utils/DeveloperIcons";

function About() {
    if (about){
        return (
        <section className="about">
            <h1>About</h1>
            {about.map((article) => (
            <article key={article.id}>
                <h2>{article.title}</h2>
                <small>{article.summary}</small>
                {article.title === "Skills" && <DeveloperIcons />}
                <br />
                {article.images && (
                    article.images.map(image => <img key={image.id} src={image.link} alt={image.alt} />)                 
                )}
                {article.paragraphs && (article.paragraphs.map((paragraph) => <span key={paragraph.id}>{paragraph.body}</span>))}
                {article.subsects && (article.subsects.map((subsect) => (
                    <div key={subsect.id}>
                        <h3>{subsect.title}</h3>
                        {subsect.paragraphs && (subsect.paragraphs.map(paragraph => <span key={paragraph.id}>{paragraph.body}</span>))}
                        <br />
                    </div>
                )))}
            </article>
            ))}
        </section>
        )}
    return <p>Oops! There's nothing here!</p>
}

export default About;