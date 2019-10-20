import React, { Component } from 'react';
import {url} from '../../urlBase';
import axios from 'axios';

class AdminPic extends Component {
    state = {
        imageFile: null,
        selectedFile: null
    }

    async componentDidMount() {
        await axios({
            url: `${url}api/v1/users`,
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.token}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            }})
            .then(res => {
                this.setState({
                    imageFile: res.data[0].pic_url.picture
                })
            })
    }

    handleFile = (event) => {
        this.setState({
            selectedFile: event.currentTarget.files[0]
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let id = localStorage.getItem("id");

        const formData = new FormData();
        formData.append('user[pic]', this.state.selectedFile);

        if (this.state.selectedFile !== null) {
            axios({
                url: `${url}api/v1/users/${id}`,
                method: 'PATCH',
                headers: {
                    authorization: `Bearer ${localStorage.token}`
                },
                data: formData
            }).then(res => {
                this.setState({
                    imageFile: res.data.pic_url.picture
                })
                
            })
        }
        
    }
    
    render() {
        console.log("File: ", this.state.imageFile)
        return (
            <div className="admin-pic">
                <div className="pic">
                    <img src={this.state.imageFile} />
                </div>  
                <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleFile} />
                    <button>Upload</button> 
                </form>  
            </div>
        )
    }
}

export default AdminPic;