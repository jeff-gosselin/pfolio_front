import React from 'react';
import '../../css/client_css/HeroSection.scss';
import man from '../../img/man-on-mouse.png';

const HeroSection = () => {
    return (
        <section id="hero">
            
            <div className="man-on-mouse">
                <img src={man} alt="Jeff"/>
            </div>
            <div className="title">
                <h1>Web Developer / Designer</h1>
                <p>Specializing in Front End Web Development</p>
            </div>
            
            <div className="bkg-img">
                <div className="hero-wht-bkg">
                    <div className="stripe"></div>
                </div>
                <div className="stripe"></div>
            </div>
            <div className="triangle"></div>
            
        </section>
    );
};
export default HeroSection;