import React, { Component } from 'react';
import '../css/Project.scss';

const Project = (props) => {
    const {title, description, url, technologies} = props.data;
    
    return (
        <div className="project">
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>{url}</h2>
        </div>
    );
};
export default Project;