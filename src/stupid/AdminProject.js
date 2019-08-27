import React from 'react';
import '../css/AdminProject.scss';

const AdminProject = (props) => {
    const {title, description, url, technologies} = props.data;
    
    return (
        <div className="admin-project">
            <h1>{title}</h1>
            <p>{technologies}</p>
            <p>{description}</p>
            <h2>{url}</h2>
        </div>
    );
};
export default AdminProject;