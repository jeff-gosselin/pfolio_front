import React, { Component } from 'react';
import Project from '../stupid/Project';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/WorkSection.scss';

const baseURL = 'http://localhost:3000/';

class Admin extends Component {
    state = {
        projects: [],
        loggedIn: true
    }

    // async componentDidMount() {
    //     let projects = await axios.get(`${baseURL}api/v1/projects`);
    //     this.setState({
    //         projects: projects.data
    //     })
    // }

    logout = () => {
        localStorage.clear();
        this.setState({
			loggedIn: !!localStorage.token
		})
    }

    render() {
        if (!localStorage.token || localStorage.token === "undefined") {
            return <Redirect to="/login"/>
        }

        return (
            <section id="admin">
                <h1>This is the Admin Page</h1>
                <Link to={'/'}>Go to Site</Link>
                <button onClick={this.logout}>Log Out</button>
                <ul>
                    <li>Logged in as: {localStorage.getItem("user")}</li>
                    <li>change login</li>
                    <li>Add a Project</li>
                    <li>Update Project</li>
                    <li>Delete Project</li>
                </ul>
            </section>
        );
    }
    
}
export default Admin;