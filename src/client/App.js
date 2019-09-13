import React, { Component } from 'react';
import {url} from '../urlBase';
import HeroSection from './sections/HeroSection';
import BioSection from './sections/BioSection';
import WorkSection from './sections/WorkSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import Login from '../admin/Login';
import Admin from '../admin/Admin';
import Footer from './sections/Footer';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import '../css/client_css/App.scss';

class App extends Component {
  state = {
    projects: []
  }

  async componentDidMount() {
      let projects = await axios.get(`${url}api/v1/projects`);
      this.setState({
          projects: projects.data
      })
  }

  render() {
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
