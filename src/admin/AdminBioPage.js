import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/admin_css/AdminBioPage.scss';

const baseURL = 'http://localhost:3000/';

class AdminBio extends Component {
    state = {
        pic: null
    }

    async componentDidMount() {
        let user = await axios({
            url: `${baseURL}api/v1/users`,
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.token}`
            }})
            .then(res => console.log(res.data[0]))
    }

    handleFile = (event) => {
        this.setState({
            pic: event.currentTarget.files[0]
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        let id = localStorage.getItem("id");
        console.log("ID: ", id)
        const formData = new FormData();
        formData.append('user[pic]', this.state.pic);

        axios({
            url: `${baseURL}api/v1/users/${id}`,
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.token}`
            },
            pic: formData
        }).then(res => console.log(res))
    }

    render() {
        console.log(this.state.pic)
        return (
            <div>
                <Link className="admin-proj-link" to="/admin">Back to projects</Link> 
                <div className="admin-bio">
                    
                    <div className="admin-pic">
                        <div className="pic"></div>  
                        <form onSubmit={this.handleSubmit}>
                            <input type="file" name='pic' onChange={this.handleFile} />
                            <button>Upload Image</button> 
                        </form>  
                    </div>

                    <div className="admin-skills">
                        <h2>Skills</h2> 
                        <form>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <button>Apply Skills</button> 
                        </form>  
                    </div>

                </div>
            </div>
            
        )
    }
}

export default AdminBio;