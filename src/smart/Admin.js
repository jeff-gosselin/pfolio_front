import React, { Component } from 'react';
import Project from '../stupid/Project';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/WorkSection.scss';

const baseURL = 'http://localhost:3000/';

class Admin extends Component {
    // state = {
    //     projects: []
    // }

    // async componentDidMount() {
    //     let projects = await axios.get(`${baseURL}api/v1/projects`);
    //     this.setState({
    //         projects: projects.data
    //     })
    // }

    render() {
        return (
            <section id="admin">
                <h1>This is the Admin Page</h1>
                <Link to={'/'}>Go to Site</Link>
            </section>
        );
    }
    
}
export default Admin;