import React, { Component } from 'react';
import Project from '../stupid/Project';
import logo from '../img/jg-logo.svg';
import { FaRegWindowMaximize } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';
// import axios from 'axios';
import '../css/Admin.scss';

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

        let projects = this.props.projects.map(proj => <Project key={proj.id} data={proj} />);

        return (
            <section id="admin">
                <nav>
                    <div className="brand">
                        <img src={logo} alt="Jeff Gosselin: Web Developer / Designer"/>
                        <h1><span>Admin</span>istration</h1>
                    </div>

                    <div className="controls">
                        <Link className="site" to={'/'}><FaRegWindowMaximize /></Link>
                        <div className="user">
                            <h3>Logged in as: {localStorage.getItem("user")}</h3>
                        </div>
                        
                        <div className="btn-wrapper">
                            <button onClick={this.logout}>Log Out</button>
                        </div>
                        
                    </div>
                    
                </nav>
                
                
                <ul>
                    <li>Logged in as: {localStorage.getItem("user")}</li>
                    <li>change login</li>
                    <li>Add a Project</li>
                    <li>Update Project</li>
                    <li>Delete Project</li>
                </ul>
                {projects}
            </section>
        );
    }
    
}
export default Admin;