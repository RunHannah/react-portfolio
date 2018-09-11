import React, { Component } from "react";

class NavBar extends Component {
  handleScroll(event) {
    if (event === "home") {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    } else if (event === "projects") {
      window.scroll({
        top: 525,
        behavior: "smooth"
      });
    } else if (event === "skills") {
      window.scroll({
        top: 2300,
        behavior: "smooth"
      });
    } else if (event === "about") {
      window.scroll({
        top: 2900,
        behavior: "smooth"
      });
    } else if (event === "contact") {
      window.scroll({
        top: 2900,
        behavior: "smooth"
      });
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-wrapper">
          <a className="nav-text-name" href="#">
            {/* Hannah Lee */}
          </a>
          <ul className="right hide-on-sm-and-down">
            <li>
              <a
                className="nav-text"
                // href="#home"
                onClick={e => this.handleScroll("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-text"
                // href="#projects"
                onClick={e => this.handleScroll("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="nav-text"
                // href="#skills"
                onClick={e => this.handleScroll("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="nav-text"
                // href="#about"
                onClick={e => this.handleScroll("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-text"
                // href="#contact"
                onClick={e => this.handleScroll("contact")}
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
