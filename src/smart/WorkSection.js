import React, { Component } from 'react';
import Project from '../stupid/Project';
import axios from 'axios';
import '../css/WorkSection.scss';

const baseURL = 'http://localhost:3000/';

class WorkSection extends Component {
    state = {
        projects: []
    }

    async componentDidMount() {
        let projects = await axios.get(`${baseURL}api/v1/projects`);
        this.setState({
            projects: projects.data
        })
    }

    render() {
        let projects = this.state.projects.map(proj => <Project key={proj.id} data={proj} /> );

        console.log("Projects:", this.state.projects)
        return (
            <section id="work">
                <h1>This is the Work Section</h1>
                {projects}
            </section>
        );
    }
    
};
export default WorkSection;