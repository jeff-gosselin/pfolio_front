import React, { Component } from 'react';
import axios from 'axios';
import {FaRegWindowClose} from 'react-icons/fa';
import '../css/AddProject.scss';

class AddProject extends Component {
    state = {
        title: '',
        tech: '',
        url: '',
        desc: '',  
        image: null  
    }

    // Can't figure this out... getting the correct data from the file upload input
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
        let id = localStorage.getItem("id");
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
        formData.append('project[description]', this.state.desc);
        formData.append('project[image]', this.state.image);
        formData.append('project[date]', today);
        formData.append('project[user_id]', id);

        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
        
        axios({
            url: 'http://localhost:3000/api/v1/projects',
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.token}`
            },
            data: formData
        }).then(res => console.log(res))

        // let request = new XMLHttpRequest();
        // request.open('POST', 'http://localhost:3000/api/v1/projects');
        // request.setRequestHeader('Authorization','Bearer ' + localStorage.token);
        // request.send(formData);
        this.props.projectFormToggle();
    }

    // onSubmitProjectForm = (e) => {
    //     e.preventDefault();
    //     const {title, tech, url, desc, image} = this.state;
    //     let id = localStorage.getItem("id");
    //     console.log("ID:", id)
    //     var today = new Date();
    //     var dd = today.getDate();
    //     var mm = today.getMonth()+1; //January is 0!
    //     var yyyy = today.getFullYear();

    //     if(dd<10) {
    //         dd = '0'+dd
    //     } 

    //     if(mm<10) {
    //         mm = '0'+mm
    //     } 

    //     today = mm + '/' + dd + '/' + yyyy;

    //     fetch('http://localhost:3000/api/v1/projects', {
	// 		method: "POST",
	// 		body: JSON.stringify({
	// 			title: title,
	// 			technologies: tech,
    //             description: desc,
    //             url: url,
    //             date: today,
    //             user_id: id
			
	// 		}),
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			Accept: "application/json",
	// 			Authorization: `Bearer ${localStorage.token}`
	// 		}

	// 	})
	// 	.then(response => response.json())
	// 	.then(data => {
    //         console.log("Submitted: ", data);
    //     })
        

    // }

    render() {
        return (
            <div className="add-project-backdrop">
                <div className="add-project">
                    <div className="close" onClick={this.props.projectFormToggle}><FaRegWindowClose/></div>
                    <h1>Add New Project</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input name="title" type="text" placeholder="Title" onChange={this.handleInput}/>
                        <input name="tech" type="text" placeholder="Technologies" onChange={this.handleInput}/>
                        <input name="url" type="text" placeholder="URL" onChange={this.handleInput}/>
                        <textarea name="desc" type="text" placeholder="Description" onChange={this.handleInput}/>
                        <input type="file" name="image" onChange={this.handleFile}/>
                        <button>Add</button> 
                    </form>
                </div>      
            </div>
            
        );
    }
    
    
};
export default AddProject;