import React, { Component } from 'react';
import TopNav from './TopNav';
import '../css/HeroSection.css';

const HeroSection = () => {
    return (
        <section id="hero">
            <TopNav/>
            <div class="title">
                <h1>Web Developer / Designer</h1>
                <p>Duis laboris velit officia laboris et proident ad nisi.</p>
            </div>
            

            <div clas="wht-bkg"></div>
            <div class="bkg-img"></div>
        </section>
    );
};
export default HeroSection;