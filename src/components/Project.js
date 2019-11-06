import React from 'react';
import '../css/client_css/Project.scss';

// icons
import { FaGithub } from 'react-icons/fa';

const Project = props => {
  const { title, description, url, github, technologies, img } = props.data;
  let techUsed = technologies.join(' / ');

  return (
    <div className='project'>
      <div className='proj-cover'>
        <img className='cover-img' src={img} alt='' />
      </div>
      <div className='proj-info'>
        <h1>{title}</h1>
        <p>Built with {techUsed}</p>
        <p className='desc'>{description}</p>
      </div>
      <div className='proj-links'>
        <a
          href={url}
          className='proj-url'
          target='_blank'
          rel='noopener noreferrer'
        >
          CLICK TO VIEW
        </a>
        <div className='seperator'></div>
        <a
          href={github}
          className='proj-github'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
export default Project;
