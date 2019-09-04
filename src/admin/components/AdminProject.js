import React from 'react';
import '../../css/admin_css/AdminProject.scss';

// icons
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'; 

const AdminProject = (props) => {
    const {title, url, date, img} = props.data;
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
                <FaPencilAlt className="edit" onClick={() => props.projectFormToggle("edit", props.data)} />
                <FaTrashAlt className="delete" onClick={() => props.projectFormToggle("delete", props.data)} />
            </div>
            
        </div>
    );
};
export default AdminProject;