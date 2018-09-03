import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="center-align social-links">
        {/* LinkedIn */}
        <a href="https://google.com" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>

        {/* Github */}
        <a href="https://google.com" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>

        {/* Twitter */}
        <a href="https://google.com" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-twitter-square" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default Footer;
