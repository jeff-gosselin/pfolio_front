import React from 'react';
import BioPic from '../components/BioPic';
import Paragraph from '../components/Paragraph';
import '../../css/client_css/BioSection.scss';

const BioSection = () => {
    return (
        <section id="bio">
            <Paragraph />
            <div className="bio-white-bkg">
                <div className="stripe"></div> 
            </div>
            <BioPic />
            <div className="stripe"></div> 
        </section>
    );
};
export default BioSection;