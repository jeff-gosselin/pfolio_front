import React from 'react';
import {FaRegWindowClose} from 'react-icons/fa';
import '../css/AddProject.scss';

const AddProject = (props) => {
    
    
    return (
        <div className="add-project-backdrop">
            <div className="add-project">
                <div className="close" onClick={props.projectFormToggle}><FaRegWindowClose/></div>
                <h1>Add New Project</h1>
                <form>
                    <input type="text" placeholder="Title"/>
                    <input type="text" placeholder="Technologies"/>
                    <input type="text" placeholder="URL"/>
                    <textarea type="text" placeholder="Description"/>
                    <button>Add</button> 
                </form>
            </div>      
        </div>
        
    );
};
export default AddProject;