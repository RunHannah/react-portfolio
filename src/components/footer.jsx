import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="center-align social-links">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/hannahlee1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>

        {/* Github */}
        <a
          href="https://github.com/runhannah"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/tweetbyhannah"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-twitter-square" aria-hidden="true" />
        </a>
        <div>
          <p>This website was built with React and Materialize CSS.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
