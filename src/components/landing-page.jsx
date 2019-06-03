import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-grid">
        <div className="row">
          <p className="landing-intro">HANNAH LEE</p>
          <p className="landing-intro-text">
            Full Stack Developer specializing in JavaScript, React, Node.js,
            Express, MongoDB, PostgreSQL, and problem solving.
          </p>
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
        </div>
      </div>
    );
  }
}

export default LandingPage;
