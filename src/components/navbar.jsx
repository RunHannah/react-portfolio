import React, { Component } from 'react';

class NavBar extends Component {
  state = {
    navNames: ['home', 'projects', 'skills', 'about', 'contact'],
  };

  render() {
    const { navNames } = this.state;
    return (
      <nav className='navbar'>
        <ul>
          {navNames.map((name, index) => (
            <li key={index}>
              <a href={`/#${name}`} className='nav-text'>
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
