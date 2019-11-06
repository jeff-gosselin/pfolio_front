import React from 'react';
import BioPic from '../components/BioPic';
import Paragraph from '../components/Paragraph';
import Skills from '../components/Skills';
import SocialMedia from '../components/SocialMedia';
import '../css/client_css/BioSection.scss';

const BioSection = props => {
  return (
    <section id='bio'>
      <BioPic />
      <Paragraph summary={props.summary} />
      <Skills skills={props.skills} />
      <SocialMedia />

      <div className='bio-white-bkg'>
        <div className='stripe'></div>
      </div>

      <div className='stripe'></div>
    </section>
  );
};
export default BioSection;
