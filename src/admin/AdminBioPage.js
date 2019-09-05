import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/admin_css/AdminBioPage.scss';
import { FaChevronLeft } from 'react-icons/fa';

const baseURL = 'http://localhost:3000/';

class AdminBio extends Component {
    state = {
        pic: null
    }

    async componentDidMount() {
        await axios({
            url: `${baseURL}api/v1/users`,
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.token}`
            }})
            .then(res => {
                this.setState({
                    pic: res.data[0].pic_url.picture
                })
            })
    }

    handleFile = (event) => {
        this.setState({
            pic: event.currentTarget.files[0]
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let id = localStorage.getItem("id");

        const formData = new FormData();
        formData.append('user[pic]', this.state.pic);

        if (this.state.pic !== null) {
            axios({
                url: `${baseURL}api/v1/users/${id}`,
                method: 'PATCH',
                headers: {
                    authorization: `Bearer ${localStorage.token}`
                },
                data: formData
            }).then(res => console.log(res))
        }
        
    }

    render() {
        return (
            <div>
                <Link className="admin-proj-link" to="/admin"><FaChevronLeft /> <span>back to projects</span></Link> 
                <div className="admin-bio">
                    
                    <div className="admin-pic">
                        <div className="pic">
                            <img src={this.state.pic} />
                        </div>  
                        <form onSubmit={this.handleSubmit}>
                            <input type="file" name="pic" onChange={this.handleFile} />
                            <button>Upload</button> 
                        </form>  
                    </div>

                    <div className="admin-skills">
                        <div className="admin-skills-header">
                            <h2>Skills</h2>
                            <button>+</button> 
                        </div>
                        <ul className="admin-skills-list">
                            <li>
                                <h3>ReactJS</h3>
                                <p>65%</p>
                            </li>
                            <li>
                                <h3>JavaScript</h3>
                                <p>75%</p>
                            </li>
                        </ul>     
                    </div>

                    <div className="admin-caption">
                        <div className="admin-caption-header">
                            <h2>About Me</h2>
                        </div>
                        <form onSubmit={this.submitCaption}>
                            <textarea name="bio" onChange={this.handleCaption} placeholder="Tell them what you're about." />
                            <button>Submit</button> 
                        </form>
                        
                    </div>

                </div>
            </div>
            
        )
    }
}

export default AdminBio;