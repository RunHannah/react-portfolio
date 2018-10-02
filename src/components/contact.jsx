import React, { Component } from "react";
import Profile from "../assets/images/profile.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="row">
          <div className="col s12 m8">
            {/* <div className="row"> */}
            <h2 className="about">About</h2>
            <hr />
            {/* <img
              src={Profile}
              alt="profile"
              style={{ height: "200px", borderRadius: "50%" }}
            /> */}
            {/* </div> */}
            {/* <ul style={{ width: "75%", margin: "auto", paddingTop: "1em" }}> */}
            <p>
              Previously I worked in the public sector for a little over eight
              years as a budget analyst where I formulated, executed, and
              defended budgets to support public policy and programs at the
              federal and county levels.
            </p>

            <div className="row">
              <div className="col s12 m2">
                <p style={{ fontWeight: "bolder" }}>Education</p>
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
                <p style={{ fontWeight: "bolder" }}>Interests</p>
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
