import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div id='home' className='top-container'>
        <div className='landing-grid'>
          <span className='name'>
            <p>Hi, my name is </p>
            <h1 className='landing-intro'>HANNAH LEE</h1>
          </span>
          <p className='landing-intro-text'>
            I'm a <span className='role'>Full Stack Developer</span>{' '}
            specializing in JavaScript, React, Node.js, Express, MongoDB,
            PostgreSQL, and problem solving.
          </p>
          {/* LinkedIn */}
          <a
            href='https://linkedin.com/in/hannahlee1'
            rel='noopener noreferrer'
            target='_blank'
          >
            <i className='fab fa-linkedin' aria-hidden='true' />
          </a>

          {/* Github */}
          <a
            href='https://github.com/runhannah'
            rel='noopener noreferrer'
            target='_blank'
          >
            <i className='fab fa-github' aria-hidden='true' />
          </a>

          {/* Twitter */}
          <a
            href='https://twitter.com/tweetbyhannah'
            rel='noopener noreferrer'
            target='_blank'
          >
            <i className='fab fa-twitter' aria-hidden='true' />
          </a>
        </div>
      </div>
    );
  }
}

export default LandingPage;
