import React, { Component } from 'react';
import logo from '../../img/jg-logo.svg';
import { FaFolderPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class AdminNav extends Component {
    render() {
        return (
            <nav className="admin-nav">
                <Link className="brand" to={'/'}>
                    <img src={logo} alt="Jeff Gosselin: Web Developer / Designer"/>
                    <h1><span>Admin</span>istration</h1>
                </Link>

                <div className="controls">
                    <div className="btn-wrapper">
                        <div onClick={() => this.props.projectFormToggle("add", null)} className="new"><FaFolderPlus /></div>
                    </div>

                    
                        <div className="user">
                            <h3>
                                <Link className="user-bio" to={'/admin/bio'}>Logged in as: {localStorage.getItem("user")}</Link>
                            </h3>
                        </div>
                    
                    <div className="btn-wrapper">
                        <button onClick={this.props.logout}>Log Out</button>
                    </div>  
                </div>    
            </nav>
        )
    }
}

export default AdminNav;