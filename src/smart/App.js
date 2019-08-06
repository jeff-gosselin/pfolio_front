import React from 'react';
import '../css/App.scss';
import HeroSection from '../stupid/HeroSection';
import BioSection from '../stupid/BioSection';
import WorkSection from '../stupid/WorkSection';

function App() {
  return (
    <div>
      <HeroSection />
      <BioSection />
      <WorkSection />
    </div>
  );
};

export default App;
