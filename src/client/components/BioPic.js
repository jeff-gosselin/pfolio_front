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
                // authorization: `Bearer ${localStorage.token}`
            }})
            .then(res => {
                this.setState({
                    imageFile: res.data[0].pic_url.picture
                })
            })
    }
    
    render() {
        return (
            <div>
                <div className="bio-pic">
                    <img src={this.state.imageFile} />
                </div>
                <div className="bio-pic-solids">
                    <div className="bio-pic-solid1">
                        <div className="green"></div>
                    </div>
                    <div className="bio-pic-solid2">
                        <div className="blue"></div>
                    </div>
                </div>
                
            </div>
            
                
        )
    }
}

export default BioPic;