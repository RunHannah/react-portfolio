import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="row">
          <div className="col s12 m8">
            {/* <div className="row"> */}
            <h2 className="about">About</h2>
            <hr />
            <p>
              Curiosity and the ability to work on interesting ideas and
              problems prompted me to pursue a career in software development
              after 8 years in budget and policy analysis. I’m passionate about
              technology, data, and combining them to create helpful tools and
              solutions. A natural self-starter who takes initiative and learns
              quickly, I’m highly organized and efficient with a strong
              attention to detail, and excited to join a collaborative team.
            </p>

            <div className="row">
              <div className="col s12 m2">
                <p style={{ fontWeight: 'bolder' }}>Education</p>
              </div>
              <div className="col s12 m9">
                <p>Epicodus, Software Development Certificate</p>
                <p>
                  The George Washington University, M.A., Public Administration,
                  Budget and Public Finance
                </p>
                <p>
                  University of California, Santa Barbara, B.A. Political
                  Science, International Relations
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m2">
                <p style={{ fontWeight: 'bolder' }}>Interests</p>
              </div>
              <div className="col s12 m9">
                <p>
                  In my free time I enjoy volunteering, running, playing tennis,
                  art/music/media, attending tech meetups and building my coding
                  skills! I enjoy listnening to podcasts such as Syntax, How I
                  Built This, and Code Newbie.
                </p>
                <p>
                  In 2018 I've also attended the following conferences: Chain
                  React: The React Native Conference, ACT-W (Advancing the
                  Careers of Women in Tech), OSCON (Expo Pass), and will be in
                  San Francisco at the end of October for JAMstack (JavaScript,
                  APIs, Markup).
                </p>
              </div>
            </div>
            {/* </ul> */}
          </div>

          <div className="col s12 m4 contact-div">
            <h2 className="contact-me">Contact Me</h2>
            <hr />
            <div className="contact-list">
              <p>
                <i className="fab fa-linkedin" aria-hidden="true" />
                https://linkedin.com/in/hannahlee1
              </p>
              <p>
                <i className="far fa-envelope" aria-hidden="true" />
                leexhannah@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
