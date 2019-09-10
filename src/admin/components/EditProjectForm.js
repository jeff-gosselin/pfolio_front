import React, { Component } from 'react';
import {url} from '../../urlBase';
import axios from 'axios';
import {FaRegWindowClose} from 'react-icons/fa';
import '../../css/admin_css/AddProject.scss';

class EditProjectForm extends Component {
    state = {
        title: this.props.project.title ? this.props.project.title : '',
        tech: this.props.project.technologies ? this.props.project.technologies : '',
        url: this.props.project.url ? this.props.project.url : '',
        github: this.props.project.github ? this.props.project.github : '',
        desc: this.props.project.description ? this.props.project.description : '',  
        image: null  
    }

    handleInput = (event) => {
        
            this.setState({
                [event.target.name]: event.target.value
            })
		
    }

    handleFile = (event) => {
        this.setState({
            image: event.currentTarget.files[0]
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        for (let elem in this.state) {
            if(this.state[elem] === '' || this.state[elem] === null) {
                return null;
            }         
        }

        let id = localStorage.getItem("id");
        let projID = this.props.project.id;
        
        // Get today's date
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd = '0'+dd
        } 
        if(mm<10) {
            mm = '0'+mm
        } 
        today = mm + '/' + dd + '/' + yyyy;

        const formData = new FormData();
        formData.append('project[title]', this.state.title);
        formData.append('project[technologies]', this.state.tech);
        formData.append('project[url]', this.state.url);
        formData.append('project[github]', this.state.github);
        formData.append('project[description]', this.state.desc);
        formData.append('project[image]', this.state.image);
        formData.append('project[date]', today);
        formData.append('project[user_id]', id);
        
        axios({
            url: `${url}api/v1/projects/${projID}`,
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.token}`
            },
            data: formData
        }).then(res => console.log(res))
        .then(this.props.projectFormToggle());  
    }

    render() {
        console.log("data: ", this.props.project.description);
        return (
            <div className="add-project-backdrop">
                <div className="add-project">
                    <div className="close" onClick={this.props.projectFormToggle}><FaRegWindowClose/></div>
                    <h1>Edit Project</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input name="title" type="text" placeholder="Title" onChange={this.handleInput} value={this.state.title} />
                        <input name="tech" type="text" placeholder="Technologies" onChange={this.handleInput} value={this.state.tech} />
                        <input name="url" type="text" placeholder="URL" onChange={this.handleInput} value={this.state.url} />
                        <input name="github" type="text" placeholder="Github" onChange={this.handleInput} value={this.state.github} />
                        <textarea name="desc" type="text" placeholder="Description" onChange={this.handleInput} value={this.state.desc} />
                        <input type="file" name="image" onChange={this.handleFile}/>
                        <button>Update Project</button> 
                    </form>
                </div>      
            </div>
            
        );
    }
    
    
};
export default EditProjectForm;