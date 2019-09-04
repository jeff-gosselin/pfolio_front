import React, { Component } from 'react';
import AdminNav from './components/AdminNav';
import AdminBioPage from './AdminBioPage';
import AddProjectForm from './components/AddProjectForm';
import EditProjectForm from './components/EditProjectForm';
import DeleteProjectForm from './components/DeleteProjectForm';
import AdminProject from './components/AdminProject';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import '../css/admin_css/Admin.scss';

const baseURL = 'http://localhost:3000/';

class Admin extends Component {
    state = {
        projectForm: false,
        project: null,
        origin: '',
        loggedIn: true
    }

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

        return (
            <section id="admin">
                <AdminNav projectFormToggle={this.projectFormToggle} logout={this.logout} />
                <div className="admin-main">
                    {this.state.projectForm && this.state.origin === 'add' ? <AddProjectForm projectFormToggle={this.projectFormToggle} /> : null}
                    {this.state.projectForm && this.state.origin === 'edit' ? <EditProjectForm projectFormToggle={this.projectFormToggle} project={this.state.project} /> : null}
                    {this.state.projectForm && this.state.origin === 'delete' ? <DeleteProjectForm projectFormToggle={this.projectFormToggle} project={this.state.project} /> : null}
                    
                    <Switch>
                        <Route exact path="/admin" render={() => {
                            return (
                                <div className="admin-projects">
                                    {projects}
                                </div>
                            )
                        }
                        } />
                        <Route exact path="/admin/bio" component={AdminBioPage} />
                    </Switch> 
                </div>  
            </section>
        );
    }
    
}
export default Admin;