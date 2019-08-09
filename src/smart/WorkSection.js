import React, { Component } from 'react';
import Project from '../stupid/Project';
import '../css/WorkSection.scss';


class WorkSection extends Component {
    
    render() {
        let projects = this.props.projects.map(proj => <Project key={proj.id} data={proj} /> );

        console.log("Projects:", this.props.projects)
        return (
            <section id="work">
                <h1>This is the Work Section</h1>
                {projects}
            </section>
        );
    }
    
};
export default WorkSection;