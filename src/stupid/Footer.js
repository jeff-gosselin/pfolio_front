import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// CSS
import '../css/Footer.scss';

// icons
import { FaUser } from 'react-icons/fa';

function Footer() {
	return (

			<footer>
				<div className="footer-content">
					<p>&copy; 2019 Jeff Gosselin,  All Rights Reserved</p>
					<div className="line"></div>
					<Link to={'/login'}><FaUser /> Admin Login</Link>
				</div>
			</footer>

	)
}

export default Footer;