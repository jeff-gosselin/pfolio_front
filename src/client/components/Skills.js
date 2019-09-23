import React, { Component } from 'react';
import {url} from '../../urlBase';
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
        console.log("Skills: ", this.state.skillset)
        return (
            
            <div id="skills">
                <h2>Let me introduce myself...</h2>
                {/* <p>"{this.state.pgraph}"</p> */}
            </div>
                
        )
    }
}

export default Skills;