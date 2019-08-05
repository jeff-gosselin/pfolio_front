import React, { Component } from 'react';
import TopNav from './TopNav';
import '../css/HeroSection.scss';
import man from '../img/man-on-mouse.png';

const HeroSection = () => {
    return (
        <section id="hero">
            <TopNav/>
            <div class="man-on-mouse">
                <img src={man} alt="Jeff"/>
            </div>
            <div class="title">
                <h1>Web Developer / Designer</h1>
                <p>Duis laboris velit officia laboris et proident ad nisi.</p>
            </div>
            
            <div class="bkg-img">
                <div class="wht-bkg"></div>
                <div class="stripe"></div>
            </div>
        </section>
    );
};
export default HeroSection;