import React, { Component } from 'react';
import HeroSection from '../stupid/HeroSection';
import BioSection from '../stupid/BioSection';
import WorkSection from './WorkSection';
import ResumeSection from '../stupid/ResumeSection';
import ContactSection from '../stupid/ContactSection';
import Login from './Login';
import Admin from './Admin';
import Footer from '../stupid/Footer';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import '../css/App.scss';

const baseURL = 'http://localhost:3000/';

class App extends Component {
  state = {
    projects: []
  }

  async componentDidMount() {
      let projects = await axios.get(`${baseURL}api/v1/projects`);
      this.setState({
          projects: projects.data
      })
  }

  render() {
    console.log("HELLO:", this.state.projects);
    return (
      <div>
        
        <Switch>
          <Route path="/login" component={Login} /> 
          <Route path="/admin" render={() => <Admin projects={this.state.projects} />} />
          <Route path="/" render={ () => {
            return (
              <div>
                <HeroSection />
                <BioSection />
                <WorkSection projects={this.state.projects} />
                <ResumeSection />
                <ContactSection />
              </div>
            )}
          } />
        </Switch>
        
        <Footer />
      </div>
    );
  }
  
};

export default App;
