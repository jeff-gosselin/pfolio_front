import React, { Component } from 'react';
import Project from '../stupid/Project';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.scss';

const baseURL = 'http://localhost:3000/';

class Login extends Component {
    state = {
        email: '',
        password: '',
        newUser: false,
        loggedIn: false
    }

    onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
    }
    
    onSubmitHandler(e) {
        e.preventDefault();
        if (this.state.newUser) {

            fetch('http://localhost:3000/api/v1/users', {
                method: "POST",
                body: JSON.stringify({
                    user: {username: this.state.email, password: this.state.password}}),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
			    }

		    })
            .then(response => response.json())
            .then(data => {
                console.log("Data:", data);
                localStorage.setItem("token", data.jwt);
                if (data.jwt && data.jwt !== "undefined") {
                    this.setState({
                        loggedIn: true
                    })
                }
            })

        } else {
    
            fetch('http://localhost:3000/api/v1/login', {
                method: "POST",
                body: JSON.stringify({
                    user: {username: this.state.email, password: this.state.password}}),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }

            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                localStorage.setItem("token", data.jwt);
                if (data.jwt && data.jwt !== "undefined") {
                    this.setState({
                        loggedIn: true
                    })
                }
            })
        }
    }

    // loginShopper = (username, password) => {
	
        
    //     return fetch('http://localhost:3000/api/v1/login', {
    //         method: "POST",
    //         body: JSON.stringify({
    //             shopper: {username: username, password: password}}),
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         }

    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         localStorage.setItem("token", data.jwt);
    //             return dispatch(loginTheShopper(data.shopper))
    //     })
    //     .catch(() => dispatch(loginFailed("fail")))
        
    // }

    changeLoginStatus = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    render() {
        if (localStorage.token && localStorage.token !== "undefined") {
			return <Redirect to="/admin"/>
		}
        console.log("status: ", this.state.newUser);
        return (
            <section id="login">
                
                <div className="login-box">
                    <h1>Administrator Login</h1>
                    <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler.bind(this)}>
                        <input name="email" type="email" placeholder="email"></input>
                        <input name="password" type="password" placeholder="password"></input>
                        <button>{this.state.newUser ? "Create Login" : "Login"}</button>
                    </form>
                    <h3 onClick={this.changeLoginStatus}>{this.state.newUser ? "Back To Login" : "Create New Login"}</h3>
                </div>
                
            </section>
        );
    }
    
}
export default Login;