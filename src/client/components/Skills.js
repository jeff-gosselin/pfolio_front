import React, { Component } from 'react';
import {url} from '../../urlBase';
import Skill from './Skill';
import axios from 'axios';
import '../../css/client_css/Skills.scss';

class Skills extends Component {
    state = {
        skillset: ''
    }

    async componentDidMount() {
        await axios({
            url: `${url}api/v1/skills`,
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.token}`
            }})
            .then(res => {
                this.setState({
                    skillset: res.data
                })
            })
    }
    
    render() {
        console.log("Skills: ", this.state.skillset);
        let skill;
        if (this.state.skillset !== '') {
            skill = this.state.skillset.map(skill => <Skill skill={skill} />);
        } else {
            skill = '';
        }

        return (
            
            <div id="skills">
                <h2>These are my technical skills...</h2>
                {skill}
            </div>
                
        )
    }
}

export default Skills;