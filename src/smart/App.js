import React from 'react';
import '../css/App.scss';
import HeroSection from '../stupid/HeroSection';
import BioSection from '../stupid/BioSection';
import WorkSection from './WorkSection';
import ResumeSection from '../stupid/ResumeSection';
import ContactSection from '../stupid/ContactSection';

function App() {
  return (
    <div>
      <HeroSection />
      <BioSection />
      <WorkSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
};

export default App;
