import React, { Component } from 'react';

class NavBar extends Component {
  handleScroll(event) {
    if (event === 'home') {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    } else if (event === 'projects') {
      document.querySelector('.project-list').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else if (event === 'skills') {
      document.querySelector('.skills').scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
      });
    } else if (event === 'about') {
      document.querySelector('.about').scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
      });
    } else if (event === 'contact') {
      document.querySelector('.contact-div').scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
      });
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-wrapper">
          <a className="nav-text-name">{/* Hannah Lee */}</a>
          <ul className="right hide-on-sm-and-down">
            <li>
              <a className="nav-text" onClick={e => this.handleScroll('home')}>
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-text"
                onClick={e => this.handleScroll('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="nav-text"
                onClick={e => this.handleScroll('skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a className="nav-text" onClick={e => this.handleScroll('about')}>
                About
              </a>
            </li>
            <li>
              <a
                className="nav-text"
                onClick={e => this.handleScroll('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
