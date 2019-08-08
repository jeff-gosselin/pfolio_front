import React from 'react';
import HeroSection from '../stupid/HeroSection';
import BioSection from '../stupid/BioSection';
import WorkSection from './WorkSection';
import ResumeSection from '../stupid/ResumeSection';
import ContactSection from '../stupid/ContactSection';
import Login from './Login';
import Admin from './Admin';
import Footer from '../stupid/Footer';
import { Route, Switch } from 'react-router-dom';
import '../css/App.scss';

function App() {
  return (
    <div>
      
      <Switch>
        <Route path="/login" component={Login} /> 
        <Route path="/admin" component={Admin} />
        <Route path="/" render={ () => {
          return (
            <div>
              <HeroSection />
              <BioSection />
              <WorkSection />
              <ResumeSection />
              <ContactSection />
            </div>
          )}
        } />
      </Switch>
      
      <Footer />
    </div>
  );
};

export default App;
