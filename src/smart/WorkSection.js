import React, { Component } from 'react';
import Project from '../stupid/Project';
import logo from '../img/jg-logo.svg';
import '../css/WorkSection.scss';


class WorkSection extends Component {
    
    render() {
        let projects = this.props.projects.map(proj => <Project key={proj.id} data={proj} /> );

        return (
            <section id="work">
                <div id="work-headline">
                    <h1><span>My</span> Projects</h1>
                </div>
                <div className="project-grid">
                    {projects}
                </div>
                
            </section>
        );
    }
    
};
export default WorkSection;