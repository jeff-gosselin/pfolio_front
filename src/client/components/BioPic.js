import React, { Component } from 'react';
import {url} from '../../urlBase';
import axios from 'axios';
import '../../css/client_css/BioPic.scss';

class BioPic extends Component {
    state = {
        imageFile: null
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
                    imageFile: res.data[0].pic_url.picture
                })
            })
    }
    
    render() {
        return (
            
            <div className="bio-pic">
                <img src={this.state.imageFile} />
            </div>
                
        )
    }
}

export default BioPic;