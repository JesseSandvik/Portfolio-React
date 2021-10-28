import React from 'react';
import { about } from '../utils/data/About';
import DeveloperIcons from '../utils/DeveloperIcons';

export default function About() {
    if (about){
        return (
        <article>
            <h1>About</h1>
            {about.map((data) => (
            <div key={data.id}>
                <h2>{data.title}</h2>
                <small>{data.summary}</small>
                {data.title === "Skills" && <DeveloperIcons />}
                <br />
                {data.images && (
                    data.images.map(image => <img key={image.id} src={image.link} alt={image.alt} />)                 
                )}
                {data.paragraphs && (data.paragraphs.map((paragraph) => <span key={paragraph.id}>{paragraph.body}</span>))}
                {data.subsects && (data.subsects.map((subsect) => (
                    <div key={subsect.id}>
                        <h3>{subsect.title}</h3>
                        {subsect.paragraphs && (subsect.paragraphs.map(paragraph => <span key={paragraph.id}>{paragraph.body}</span>))}
                        <br />
                    </div>
                )))}
            </div>
            ))}
        </article>
        )}
    return <p>Loading...</p>
};