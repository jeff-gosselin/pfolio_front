import React, { Component } from 'react';
import logo from '../img/jg-logo.svg';
import '../css/client_css/TopNav.scss';

class TopNav extends Component {
  scroller = e => {
    let btn = e.target.innerText.toLowerCase();
    document.querySelector(`#${btn}`).scrollIntoView({
      behavior: 'smooth'
    });

    if (this.props.menu) {
      return this.props.menuScreen();
    }
  };

  render() {
    return (
      <div className='client-nav'>
        <div id='logo'>
          <img src={logo} alt='Jeff Gosselin: Web Developer / Designer' />
          <h1>
            <span>Jeff</span> Gosselin
          </h1>
        </div>

        <nav
          className={
            this.props.menu && window.document.body.clientWidth <= 715
              ? 'mobile-menu'
              : this.props.scrolled
              ? 'scrolling'
              : null
          }
        >
          <ul id='pages'>
            <li onClick={e => this.scroller(e)}>
              <div></div>Bio
            </li>
            <li onClick={e => this.scroller(e)}>
              <div></div>Work
            </li>
            <li onClick={e => this.scroller(e)}>
              <div></div>Contact
            </li>
          </ul>
        </nav>
        {this.props.menu ? (
          <p onClick={this.props.menuScreen} className='menu-icon white'>
            &times;
          </p>
        ) : (
          <p onClick={this.props.menuScreen} className='menu-icon'>
            &#9776;
          </p>
        )}
      </div>
    );
  }
}
export default TopNav;
