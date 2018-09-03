import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-grid">
        <div className="row">
          <div className="col s12 m4">
            <p className="landing-intro">Hannah Lee</p>
            <p>
              Software Developer ready to collaborate and build great products.
            </p>
            <div className="center-align social-links-intro">
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
            </div>
          </div>
          <div className="col s12 m8">
            <p>
              I'm an enthusiastic lifelong learner who transitioned from a
              career in public policy and budget analysis to software
              development to solve problems through technology. I value
              curiosity, effective communication, and building products and
              features on both the front and back-end of the stack!
            </p>
            <p>
              I recently completed a full-time software development program and
              bring an eye for detail, critical thinking, and perseverance to
              find the right solution. I remain upbeat under high pressure and
              changing environments, skilled in juggling competing priorities,
              and practice strong interpersonal skills.
            </p>
            <p>
              Becoming a developer has changed how I interact with technology
              and how I experience my daily life. I'm ready to leverage my
              skills to help find solutions and improve user experiences.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
