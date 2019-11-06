import React from 'react';
import '../css/client_css/SocialMedia.scss';

// icons
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';
import { FaBehanceSquare } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div id='social-media'>
      <span>[</span>
      <a
        href='https://www.linkedin.com/in/jeff-gosselin'
        rel='noopener noreferrer'
      >
        <FaLinkedin className='media-icon' />
      </a>

      <a href='https://github.com/jeff-gosselin' rel='noopener noreferrer'>
        <FaGithubSquare className='media-icon' />
      </a>

      <a href='https://medium.com/@jgoz' rel='noopener noreferrer'>
        <FaMedium className='media-icon' />
      </a>

      <a href='https://www.behance.net/jgozemailcbe8' rel='noopener noreferrer'>
        <FaBehanceSquare className='media-icon' />
      </a>
      <span>]</span>
    </div>
  );
};
export default SocialMedia;
