import React, {Component} from 'react';
import logo from '../img/jg-logo.svg';
import { FaAddressCard } from 'react-icons/fa';
import '../css/TopNav.scss';

const scroller = (e) => {
    let btn = e.target.innerText.toLowerCase();
    document.querySelector(`#${btn}`).scrollIntoView({
        behavior: 'smooth'
    });
}

const TopNav = () => {
    return (
        <nav>
            <div id="logo">
                <img src={logo} alt="Jeff Gosselin: Web Developer / Designer"/>
                <h1><span>Jeff</span> Gosselin</h1>
            </div>
            <ul id="pages">
                <li onClick={(e) => scroller(e)}><span></span>Bio</li>
                <li onClick={(e) => scroller(e)}>Work</li>
                <li onClick={(e) => scroller(e)}>Resume</li>
                <li onClick={(e) => scroller(e)}>Contact</li>
            </ul>
        </nav>
    );
};
export default TopNav;