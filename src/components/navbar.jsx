import React, { Component } from 'react';

class NavBar extends Component {
  state = {
    navNames: ['home', 'projects', 'skills', 'about', 'contact'],
  };

  handleScroll(name) {
    document.getElementById(name).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  render() {
    const { navNames } = this.state;
    return (
      <nav className='navbar'>
        <ul>
          {navNames.map((name, index) => (
            <li key={index}>
              <a className='nav-text' onClick={() => this.handleScroll(name)}>
                {name.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
