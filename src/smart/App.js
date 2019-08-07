import React from 'react';
import HeroSection from '../stupid/HeroSection';
import BioSection from '../stupid/BioSection';
import WorkSection from './WorkSection';
import ResumeSection from '../stupid/ResumeSection';
import ContactSection from '../stupid/ContactSection';
import Footer from '../stupid/Footer';
import '../css/App.scss';

function App() {
  return (
    <div>
      <HeroSection />
      <BioSection />
      <WorkSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
