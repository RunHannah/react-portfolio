import React, { Component } from "react";

class NavBar extends Component {
  handleScroll(event) {
    if (event === "home") {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    } else if (event === "projects") {
      document.querySelector(".project-list").scrollIntoView({
        behavior: "smooth"
      });
    } else if (event === "skills") {
      document.querySelector(".tech-skills").scrollIntoView({
        behavior: "smooth"
      });
    } else if (event === "about") {
      document.querySelector(".about").scrollIntoView({
        behavior: "smooth"
      });
    } else if (event === "contact") {
      document.querySelector(".contact-me").scrollIntoView({
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
