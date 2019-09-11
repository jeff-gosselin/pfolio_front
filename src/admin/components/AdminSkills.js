import React, { Component } from 'react';
import {url} from '../../urlBase';
import axios from 'axios';
import AdminSkill from './AdminSkill';
import '../../css/admin_css/AdminSkills.scss';

class AdminSkills extends Component {
    state = {
        skills: [],
        skillsForm: false,
        skillname: '',
        level: ''
    }

    async componentDidMount() {
        let mySkills = await axios({
            url: `${url}api/v1/skills`,
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.token}`
            }});
            
        this.setState({
            skills: mySkills.data
        })
            
    }

    skillsFormToggle = () => {
        this.setState({
            skillsForm: !this.state.skillsForm
        })
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let id = localStorage.getItem("id");
        console.log("Level", this.state.level);
        axios({
            url: `${url}api/v1/skills`,
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.token}`
            },
            data: { name: this.state.skillname, level: parseInt(this.state.level), user_id: parseInt(id) }
        }).then(result => {
            this.setState({
                skills: [...this.state.skills, result.data]
            })
        });
    }

    skillDelete = (id) => {
        let skills = this.state.skills.filter((skill) => skill.id !== id);
        axios({
            url: `${url}api/v1/skills/${id}`,
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.token}`
            }
        }).then(
            this.setState({
                skills: skills
            })
        )
    }

    render() {
        let skills = this.state.skills.map((skill) => <AdminSkill key={skill.id} skill={skill} skillDelete={this.skillDelete} />);       
        return (
            <div className="admin-skills">
                <div className="admin-skills-header">
                    <h2>Skills</h2>
                    <button onClick={this.skillsFormToggle}>+</button> 
                </div>
                <ul className="admin-skills-list">
                    {this.state.skillsForm ?
                        <li>
                            <form>
                                <input name="skillname" type="text" placeholder="Skill Name" onChange={this.handleInput} />
                                <input name="level" type="number" placeholder="Level" onChange={this.handleInput} />
                                <button onClick={this.handleSubmit}>Add</button>
                            </form>
                        </li> 
                        : null}

                    {skills}
                </ul>     
            </div>
        )
    }
}

export default AdminSkills;