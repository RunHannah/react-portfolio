import React, { Component } from 'react';

class NavBar extends Component {
  state = {
    navNames: ['Home', 'Projects', 'Skills', 'About', 'Contact']
  };

  handleScroll(event) {
    if (event === 'Home') {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    } else if (event === 'Projects') {
      document.querySelector('.project-title').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else if (event === 'Skills') {
      document.querySelector('.skills').scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
      });
    } else if (event === 'About') {
      document.querySelector('.about').scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
      });
    } else if (event === 'Contact') {
      document.querySelector('.contact-div').scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
      });
    }
  }

  render() {
    const { navNames } = this.state;
    return (
      <nav className="navbar">
        <ul>
          {navNames.map((name, index) => (
            <li key={index}>
              <a className="nav-text" onClick={e => this.handleScroll(name)}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
