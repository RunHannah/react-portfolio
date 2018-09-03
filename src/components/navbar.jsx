import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-wrapper">
          <a className="nav-text-name" href="#">
            {/* Hannah Lee */}
          </a>
          <ul className="right hide-on-sm-and-down">
            <li>
              <a className="nav-text" href="#work">
                Projects
              </a>
            </li>
            <li>
              <a className="nav-text" href="#about">
                Skills
              </a>
            </li>
            <li>
              <a className="nav-text" href="#skills">
                About
              </a>
            </li>
            <li>
              <a className="nav-text" href="#contact">
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
