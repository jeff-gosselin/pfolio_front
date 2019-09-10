import React, { Component } from 'react';
import {url} from '../../urlBase';
import axios from 'axios';
import {FaRegWindowClose} from 'react-icons/fa';
import '../../css/admin_css/AddProject.scss';

class DeleteProjectForm extends Component {
    state = {
        delete: ''  
    }

    // Can't figure this out... getting the correct data from the file upload input
    handleInput = (event) => {
        
            this.setState({
                [event.target.name]: event.target.value
            })
		
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let projID = this.props.project.id;

        if (this.state.delete === 'DELETE') {
            axios({
                url: `${url}api/v1/projects/${projID}`,
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.token}`
                }
            }).then(res => console.log(res))
            .then(this.props.projectFormToggle());
        }      
    }

    render() {
        return (
            <div className="add-project-backdrop">
                <div className="add-project">
                    <div className="close" onClick={this.props.projectFormToggle}><FaRegWindowClose/></div>
                    <h1>Delete Project</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input name="delete" type="text" placeholder="Type 'DELETE'" onChange={this.handleInput}/>
                        <button>Delete Project</button> 
                    </form>
                </div>      
            </div>
            
        );
    }
    
    
};
export default DeleteProjectForm;