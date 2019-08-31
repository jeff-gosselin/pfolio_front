import React, { Component } from 'react';
import Project from '../stupid/Project';
import '../css/WorkSection.scss';


class WorkSection extends Component {
    
    render() {
        let projects = this.props.projects.map(proj => <Project key={proj.id} data={proj} /> );

        return (
            <section id="work">
                <h1 id="work-headline">Projects</h1>
                <div className="project-grid">
                    {projects}
                </div>
                
            </section>
        );
    }
    
};
export default WorkSection;