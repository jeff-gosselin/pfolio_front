import React from 'react';
import BioCard from '../components/BioCard'
import '../../css/client_css/BioSection.scss';

const BioSection = () => {
    return (
        <section id="bio">
            <h1>This is the Bio Section</h1>
            <div className="bio-white-bkg"></div>
            <BioCard />    
        </section>
    );
};
export default BioSection;