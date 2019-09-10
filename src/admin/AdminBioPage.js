import React, { Component } from 'react';
import {url} from '../urlBase';
import AdminPic from './components/AdminPic';
// import AdminSkills from './components/AdminSkills';
// import AdminSummary from './components/AdminSummary';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/admin_css/AdminBioPage.scss';
import { FaChevronLeft } from 'react-icons/fa';
import AdminSkills from './components/AdminSkills';
import AdminSummary from './components/AdminSummary';

class AdminBio extends Component {
    render() {
        return (
            <div>
                <Link className="admin-proj-link" to="/admin"><FaChevronLeft /> <span>back to projects</span></Link> 
                <div className="admin-bio">
                    <AdminPic />
                    <AdminSkills />
                    <AdminSummary />
                </div>
            </div>
            
        )
    }
}

export default AdminBio;