import React, { Component } from 'react';
import Project from '../stupid/Project';
import AddProject from '../smart/AddProject';
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
        addProject: true,
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

        let projects = this.props.projects.map(proj => <AdminProject key={proj.id} data={proj} />);

        return (
            <section id="admin">
                <nav>
                    <Link className="brand" to={'/'}>
                        <img src={logo} alt="Jeff Gosselin: Web Developer / Designer"/>
                        <h1><span>Admin</span>istration</h1>
                    </Link>

                    <div className="controls">
                        <div className="btn-wrapper">
                            <Link className="new" to={'/add'}><FaFolderPlus /></Link>
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
                    {this.state.addProject ? <AddProject /> : null}
                    

                    <div className="admin-project">
                        {projects}
                    </div>
                    
                </div>
                
            </section>
        );
    }
    
}
export default Admin;