import React, { Component } from 'react';
import {FaRegWindowClose} from 'react-icons/fa';
import '../css/AddProject.scss';

class AddProject extends Component {
    state = {
        title: '',
        tech: '',
        url: '',
        desc: ''
    }

    onChangeProjectForm = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
    }

    onSubmitProjectForm = (e) => {
        e.preventDefault();
        const {title, tech, url, desc} = this.state;
        let id = localStorage.getItem("id");
        console.log("ID:", id)
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

        fetch('http://localhost:3000/api/v1/projects', {
			method: "POST",
			body: JSON.stringify({
				title: title,
				technologies: tech,
                description: desc,
                url: url,
                date: today,
                user_id: id
			
			}),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.token}`
			}

		})
		.then(response => response.json())
		.then(data => {
			console.log("Submitted: ", data)
		})
    }

    render() {
        console.log(this.state);
        return (
            <div className="add-project-backdrop">
                <div className="add-project">
                    <div className="close" onClick={this.props.projectFormToggle}><FaRegWindowClose/></div>
                    <h1>Add New Project</h1>
                    <form onChange={this.onChangeProjectForm} onSubmit={this.onSubmitProjectForm}>
                        <input name="title" type="text" placeholder="Title"/>
                        <input name="tech" type="text" placeholder="Technologies"/>
                        <input name="url" type="text" placeholder="URL"/>
                        <textarea name="desc" type="text" placeholder="Description"/>
                        <input type="file" />
                        <button>Add</button> 
                    </form>
                </div>      
            </div>
            
        );
    }
    
    
};
export default AddProject;