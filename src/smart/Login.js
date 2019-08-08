import React, { Component } from 'react';
import Project from '../stupid/Project';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.scss';

const baseURL = 'http://localhost:3000/';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
    }
    
    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Hey Form!")
    }

    // async componentDidMount() {
    //     let projects = await axios.get(`${baseURL}api/v1/projects`);
    //     this.setState({
    //         projects: projects.data
    //     })
    // }

    render() {
        console.log("email: ", this.state.email, "password: ", this.state.password)
        return (
            <section id="login">
                
                <div className="login-box">
                    <h1>Administrator Login</h1>
                    <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}>
                        <input name="email" type="email" placeholder="email"></input>
                        <input name="password" type="password" placeholder="password"></input>
                        <button>Login</button>
                    </form>
                    <h3>New Login</h3>
                </div>
                
            </section>
        );
    }
    
}
export default Login;