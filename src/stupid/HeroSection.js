import React from 'react';
import TopNav from './TopNav';
import '../css/HeroSection.scss';
import man from '../img/man-on-mouse.png';

const HeroSection = () => {
    return (
        <section id="hero">
            <TopNav/>
            <div className="man-on-mouse">
                <img src={man} alt="Jeff"/>
            </div>
            <div className="title">
                <h1>Web Developer / Designer</h1>
                <p>Duis laboris velit officia laboris et proident ad nisi.</p>
            </div>
            
            <div className="bkg-img">
                <div className="hero-wht-bkg"></div>
                <div className="stripe"></div>
            </div>
            <div className="triangle"></div>
        </section>
    );
};
export default HeroSection;