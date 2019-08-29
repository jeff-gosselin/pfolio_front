import React from 'react';
import '../css/AdminProject.scss';

// icons
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'; 

const AdminProject = (props) => {
    const {title, description, url, github, technologies, date, img} = props.data;
    return (
        <div className="admin-project">
            <div className="admin-project-cover">
                <a href={url}><img className="admin-project-img" src={img.img_url} alt="" /></a>
            </div>
            <div className="admin-project-info">
                <h1>{title}</h1>
                <p>Posted: &nbsp; {date}</p>
            </div>
            <div className="admin-project-links">
                <div className="seperator"></div>
                <FaPencilAlt className="edit"/>
                <FaTrashAlt className="delete"/>
            </div>
            
        </div>
    );
};
export default AdminProject;