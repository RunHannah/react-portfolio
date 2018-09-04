import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="center-align social-links footer">
        <hr />
        {/* Resume Google Drive */}
        <a
          href="https://drive.google.com/file/d/1mVvRys0HxEZzQ_tXj2ngdpSK8Qwa4HC1/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fas fa-file-alt" aria-hidden="true" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/hannahlee1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin" aria-hidden="true" />
        </a>

        {/* Github */}
        <a
          href="https://github.com/runhannah"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github" aria-hidden="true" />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/tweetbyhannah"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter" aria-hidden="true" />
        </a>
        <div>
          <p>This website was built with React and Materialize CSS.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
