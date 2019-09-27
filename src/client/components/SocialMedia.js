import React from 'react';
import '../../css/client_css/SocialMedia.scss';

// icons
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';
import { FaBehanceSquare } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div id="social-media">
            <span>[</span>
            <a href="https://www.linkedin.com/in/jeff-gosselin" target="_blank">
                <FaLinkedin className="media-icon" />
            </a>
            
            <a href="https://github.com/jeff-gosselin" target="_blank">
                <FaGithubSquare className="media-icon" />
            </a>
            
            <a href="https://medium.com/@jgoz" target="_blank">
                <FaMedium className="media-icon" />
            </a>
            
            <a href="https://www.behance.net/jgozemailcbe8" target="_blank">
                <FaBehanceSquare className="media-icon" />
            </a> 
            <span>]</span>
        </div>
    );
};
export default SocialMedia;