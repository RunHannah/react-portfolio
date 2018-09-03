import React, { Component } from "react";

class LandingPage extends Component {
  // state = {  }
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <div className="landing-grid">
          <p className="landing-intro">
            Hi there! I'm Hannah, a Software Developer ready to collaborate and
            build great products!
          </p>
          <p>
            I'm an enthusiastic lifelong learner who transitioned from a career
            in public policy and budget analysis to software development to
            solve problems through technology. I value curiosity, effective
            communication, and diversity and inclusion, and seek opportunities
            to collaborate and create solid products in Portland, OR, Los
            Angeles, SF Bay Area, or remote!
          </p>
          <p>
            I recently completed a full-time software development program and
            bring an eye for detail, critical thinking, and perseverance to find
            the right solution. I remain upbeat under high pressure and changing
            environments, skilled in juggling competing priorities, and practice
            strong interpersonal skills.
          </p>
          <p>
            In my free time I attend local meetups, conferences, learn new
            technologies, and enjoy playing tennis, running, and catching up
            with friends!
          </p>

          <p>MongoDB | Express | React | NodeJS | JavaScript</p>
          <p>Ruby on Rails | PostgreSQL</p>
        </div>
      </div>
    );
  }
}

export default LandingPage;
