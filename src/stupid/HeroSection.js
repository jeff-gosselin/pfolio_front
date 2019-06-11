import React, { Component } from 'react';
import TopNav from './TopNav';

const HeroSection = () => {
    return (
        <section id="hero">
            <TopNav/>
            <div clas="wht-bkg"></div>
            <div class="bkg-img"></div>
        </section>
    );
};
export default HeroSection;