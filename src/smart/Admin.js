import React, { Component } from 'react';
import Project from '../stupid/Project';
import AddProjectForm from './AddProjectForm';
import EditProjectForm from './EditProjectForm';
import DeleteProjectForm from './DeleteProjectForm';
import AdminProject from '../stupid/AdminProject';
import logo from '../img/jg-logo.svg';
import { FaRegWindowMaximize, FaFolderPlus } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
// import axios from 'axios';
import '../css/Admin.scss';

const baseURL = 'http://localhost:3000/';

class Admin extends Component {
    state = {
        projectForm: false,
        project: null,
        origin: '',
        loggedIn: true
    }

    // async componentDidMount() {
    //     let projects = await axios.get(`${baseURL}api/v1/projects`);
    //     this.setState({
    //         projects: projects.data
    //     })
    // }

    projectFormToggle = (origin, project) => {
        this.setState({
            projectForm: !this.state.projectForm,
            project: project,
            origin: origin
        })
    }

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

        let projects = this.props.projects.map(proj => <AdminProject key={proj.id} data={proj} projectFormToggle={this.projectFormToggle} />);
        console.log("Origin:", this.state.origin);
        return (
            <section id="admin">
                <nav>
                    <Link className="brand" to={'/'}>
                        <img src={logo} alt="Jeff Gosselin: Web Developer / Designer"/>
                        <h1><span>Admin</span>istration</h1>
                    </Link>

                    <div className="controls">
                        <div className="btn-wrapper">
                            <div onClick={() => this.projectFormToggle("add", null)} className="new"><FaFolderPlus /></div>
                        </div>

                        <div className="user">
                            <h3>Logged in as: {localStorage.getItem("user")}</h3>
                        </div>
                        
                        <div className="btn-wrapper">
                            <button onClick={this.logout}>Log Out</button>
                        </div>  
                    </div>    
                </nav>
                
                <div className="admin-main">
                    {this.state.projectForm && this.state.origin === 'add' ? <AddProjectForm projectFormToggle={this.projectFormToggle} /> : null}
                    {this.state.projectForm && this.state.origin === 'edit' ? <EditProjectForm projectFormToggle={this.projectFormToggle} project={this.state.project} /> : null}
                    {this.state.projectForm && this.state.origin === 'delete' ? <DeleteProjectForm projectFormToggle={this.projectFormToggle} project={this.state.project} /> : null}

                    <div className="admin-projects">
                        {projects}
                    </div>
                    
                </div>
                
            </section>
        );
    }
    
}
export default Admin;