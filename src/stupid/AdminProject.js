import React from 'react';
import '../css/AdminProject.scss';

const AdminProject = (props) => {
    const {title, description, url, technologies, img} = props.data;
    console.log('PIC:',img.img_url);
    return (
        <div className="admin-project">
            <h1>{title}</h1>
            <p>{technologies}</p>
            <p>{description}</p>
            <h2>{url}</h2>
            <img src={img.img_url} width="300" alt="" />
        </div>
    );
};
export default AdminProject;