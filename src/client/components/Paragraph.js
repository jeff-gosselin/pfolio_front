import React, { Component } from 'react';
import {url} from '../../urlBase';
import axios from 'axios';
import '../../css/client_css/Paragraph.scss';

class Paragraph extends Component {
    state = {
        pgraph: ''
    }

    async componentDidMount() {
        await axios({
            url: `${url}api/v1/summaries`,
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.token}`
            }})
            .then(res => {
                this.setState({
                    pgraph: res.data[0].content
                })
            })
    }
    
    render() {
        console.log("Pgraph: ", this.state.pgraph)
        return (
            
            <div id="summary">
                <h2>Let me introduce myself...</h2>
                <p>"{this.state.pgraph}"</p>
            </div>
                
        )
    }
}

export default Paragraph;