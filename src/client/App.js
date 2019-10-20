import React, { Component } from 'react';
import {url} from '../urlBase';
import TopNav from './sections/TopNav';
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
    projects: [],
    scrolled: false,
    menu: false
  }

  menuScreen = () => {
    console.log("MENU!!!!!!");
    this.setState({
      menu: !this.state.menu
    })
  }

  async componentDidMount() {
    const catalyst = document.querySelector('.hero-wht-bkg > .stripe');
    const observer = new IntersectionObserver(entries => {
      console.log("entries: ", entries[0].isIntersecting);
      if (!entries[0].isIntersecting) {
        this.setState({
          scrolled: true
        })
      } else {
        this.setState({
          scrolled: false
        })
      }

    });
    observer.observe(catalyst);

    // let projects = await axios.get(`${url}api/v1/projects`);
    
    let projects = await axios({
      url: `${url}api/v1/projects`,
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      }
    });

    this.setState({
        projects: projects.data
    });
  }

  render() {
    console.log(this.state.menu);
    return (
      <div>
        { this.state.menu ? <div className="menu-screen"></div> : null }
        <Switch>
          <Route exact path="/login" component={Login} /> 
          <Route path="/admin" render={() => <Admin projects={this.state.projects} />} />
          <Route exact path="/" render={ () => {
            return (
              <div>
                <TopNav scrolled={this.state.scrolled} menuScreen={this.menuScreen} menu={this.state.menu} />
                <HeroSection />
                <BioSection />
                <WorkSection projects={this.state.projects} />
                <ContactSection />
                <Footer />
              </div>
            )}
          } />
        </Switch>
        
        
      </div>
    );
  }
  
};

export default App;
