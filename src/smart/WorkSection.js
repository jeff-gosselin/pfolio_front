import React, { Component } from 'react';
import Project from '../stupid/Project';
import '../css/WorkSection.scss';


class WorkSection extends Component {
    
    render() {
        let projects = this.props.projects.map(proj => <Project key={proj.id} data={proj} /> );

        return (
            <section id="work">
                {/* <h1>My Work</h1> */}
                {projects}
            </section>
        );
    }
    
};
export default WorkSection;