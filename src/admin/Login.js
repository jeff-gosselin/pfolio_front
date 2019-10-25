import React, { Component } from 'react';
import {url} from '../urlBase';
import logo from '../img/jg-logo-alt.svg';
import { Redirect } from 'react-router-dom';
import '../css/admin_css/Login.scss';

class Login extends Component {
    state = {
        email: '',
        password: '',
        newUser: false,
        loggedIn: false,
        message: ''
    }

    onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
    }
    
    onSubmitHandler(e) {
        e.preventDefault();
        if (this.state.newUser) {
            this.logger("users")
        } else {
            this.logger("login")
        }
    }

    logger = (endpoint) => {
        fetch(`${url}api/v1/${endpoint}`, {
                method: "POST",
                body: JSON.stringify({
                    user: {username: this.state.email, password: this.state.password}}),
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }

            })
            .then(response => response.json())
            .then(data => {
                
                if (data.message) {
                    this.setState({
                        message: data.message
                    });
                }

                if (data.error) {
                    this.setState({
                        message: data.error
                    });
                }
                console.log("User Info:", data.user.id);
                localStorage.setItem("token", data.jwt);
                localStorage.setItem("user", data.user.username);
                localStorage.setItem("id", data.user.id);
                if (data.jwt && data.jwt !== "undefined") {
                    this.setState({
                        loggedIn: true
                    })
                }
            })
    }

    changeLoginStatus = () => {
        this.setState({
            newUser: !this.state.newUser,
            message: ''
        })
    }

    render() {
        if (localStorage.token && localStorage.token !== "undefined") {
			return <Redirect to="/admin"/>
		}
        
        return (
            <section id="login">
                
                <div className="login-box">
                    <img src={logo} alt="Jeff Gosselin: Web Developer / Designer"/>
                    <h1>Administrator Login</h1>
                    <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler.bind(this)}>
                        <input name="email" type="email" placeholder="email" />
                        <input name="password" type="password" placeholder="password" />
                        <p className="message">{this.state.message}</p>
                        <button>{this.state.newUser ? "Create Login" : "Login"}</button>
                        
                    </form>
                    <h3 onClick={this.changeLoginStatus}>{this.state.newUser ? "Back To Login" : "Create New Login"}</h3>
                </div>
                
            </section>
        );
    }
    
}
export default Login;