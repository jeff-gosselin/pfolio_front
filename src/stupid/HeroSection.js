import React, { Component } from 'react';
import TopNav from './TopNav';
import '../css/HeroSection.scss';

const HeroSection = () => {
    return (
        <section id="hero">
            <div id="logo">
                <h1><span>Jeff</span> Gosselin</h1>
            </div>
            <TopNav/>
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