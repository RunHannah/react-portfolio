import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="center-align social-links footer">
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
    );
  }
}

export default Footer;
