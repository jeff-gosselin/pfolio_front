import React, { Component } from 'react';

// Data
import { myData } from './data';

// Section Components
import TopNav from './sections/TopNav';
import HeroSection from './sections/HeroSection';
import BioSection from './sections/BioSection';
import WorkSection from './sections/WorkSection';
import ContactSection from './sections/ContactSection';

// Styles
import './css/client_css/App.scss';

class App extends Component {
  state = {
    data: myData,
    scrolled: false,
    menu: false
  };

  menuScreen = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  componentDidMount() {
    const catalyst = document.querySelector('.hero-wht-bkg > .stripe');
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) {
        this.setState({
          scrolled: true
        });
      } else {
        this.setState({
          scrolled: false
        });
      }
    });
    observer.observe(catalyst);
  }

  render() {
    const { summary, skills, projects } = this.state.data;
    return (
      <div>
        {this.state.menu ? <div className='menu-screen'></div> : null}
        <div>
          <TopNav
            scrolled={this.state.scrolled}
            menuScreen={this.menuScreen}
            menu={this.state.menu}
          />
          <HeroSection />
          <BioSection summary={summary} skills={skills} />
          <WorkSection projects={projects} />
          <ContactSection />
        </div>
      </div>
    );
  }
}

export default App;
