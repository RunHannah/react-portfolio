import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-grid">
        <div className="row">
          <div className="col s12 m6">
            <p className="landing-intro">HANNAH LEE</p>
            <p className="landing-intro-text">
              Software Developer specializing in JavaScript, React, Node.js,
              Express, MongoDB, and PostgreSQL, and a background in budget and
              policy analysis.
            </p>
            <div className="center-align social-links-intro">
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
        </div>
      </div>
    );
  }
}

export default LandingPage;
