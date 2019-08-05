import React, {Component} from 'react';
import logo from '../img/jg-logo.svg';
import '../css/TopNav.scss';

const TopNav = () => {
    return (
        <nav>
            <div id="logo">
                <img src={logo} alt="Jeff Gosselin: Web Developer / Designer"/>
                <h1><span>Jeff</span> Gosselin</h1>
            </div>
            <ul id="pages">
                <li>Bio</li>
                <li>Work</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};
export default TopNav;