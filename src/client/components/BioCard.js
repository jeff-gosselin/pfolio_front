import React, { Component } from 'react';
import {url} from '../../urlBase';
import axios from 'axios';
import '../../css/client_css/BioCard.scss';

class BioCard extends Component {
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
            <div className="bio-card">
                <div className="bio-card-pic">
                    <img src={this.state.imageFile} />
                </div>
                <div className="bio-card-left-column"></div>
                <div className="bio-card-bkg"></div> 
            </div>
        )
    }
}

export default BioCard;