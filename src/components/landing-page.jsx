import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-grid">
        <div className="row">
          <div className="col s12 m4">
            <p className="landing-intro">HANNAH LEE</p>
            <p>
              Software Developer with a Front-End focus ready to collaborate and
              build great products.
            </p>
            <div className="center-align social-links-intro">
              {/* Resume */}
              {/* <a
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-file-alt" aria-hidden="true" />
              </a> */}
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
          <div className="col s12 m8">
            <p>
              I'm an enthusiastic lifelong learner who transitioned from a
              career in public policy and budget analysis to software
              development to solve problems through technology. My primary stack
              is React, NodeJS, Express, and MongoDB, and have also built
              projects using Angular, Ruby on Rails, and Postgres. I'm to ready
              to collaborate on a team as a Front-End Engineer and actively
              seeking opportunities in Los Angeles.
            </p>
            <p>
              I value curiosity, effective communication, and a culture of
              trust. I bring an eye for detail, critical thinking, and
              perseverance to find the right solution. I remain upbeat under
              high pressure and changing environments, skilled in juggling
              competing priorities, and practice strong interpersonal skills.
            </p>
            <p>
              Becoming a developer has changed how I interact with and
              experience technology. Curious by nature, I truly enjoy learning
              how things work and ready to leverage my skills to help find
              solutions, improve user experiences, build solid products and
              reach shared goals.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
