import React, { Component } from 'react';
import {url} from '../../urlBase';
import axios from 'axios';

class AdminPic extends Component {
    state = {
        pic: null
    }

    async componentDidMount() {
        await axios({
            url: `${url}api/v1/users`,
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
                url: `${url}api/v1/users/${id}`,
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
            <div className="admin-pic">
                <div className="pic">
                    <img src={this.state.pic} />
                </div>  
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name="pic" onChange={this.handleFile} />
                    <button>Upload</button> 
                </form>  
            </div>
        )
    }
}

export default AdminPic;