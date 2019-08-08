import React, { Component } from 'react';
import Project from '../stupid/Project';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.scss';

const baseURL = 'http://localhost:3000/';

class Login extends Component {
    // state = {
    //     projects: []
    // }

    // async componentDidMount() {
    //     let projects = await axios.get(`${baseURL}api/v1/projects`);
    //     this.setState({
    //         projects: projects.data
    //     })
    // }

    render() {
        return (
            <section id="login">
                
                <div className="login-box">
                    <h1>Administrator Login</h1>
                    <form>
                        <input type="email"></input>
                        <input type="password"></input>
                        <button>Login</button>
                    </form>
                </div>
                
                {/* <Link to={'/'}>Go to Site</Link> */}
            </section>
        );
    }
    
}
export default Login;