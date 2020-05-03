import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id='about' className='contact'>
        <div className='row'>
          <div className='col s12 m12 l7 about-div'>
            <h2 className='about'>ABOUT</h2>
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

            <div className='row'>
              <div className='col s12 m10 l10'>
                <p>EDUCATION</p>

                <p>
                  <i className='fas fa-chevron-right' />
                  Epicodus, Software Development Certificate
                </p>
                <p>
                  <i className='fas fa-chevron-right' />
                  The George Washington University
                  <br /> M.A. Public Administration, Budget and Public Finance
                </p>
                <p>
                  <i className='fas fa-chevron-right' />
                  University of California, Santa Barbara
                  <br />
                  B.A. Political Science, International Relations
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col s12 m9'>
                <p>INTERESTS</p>
                <p>
                  In my free time I enjoy volunteering, running, playing tennis,
                  art/music/media, attending tech meetups and building my coding
                  skills! Living in Los Angeles also provides me time to listen
                  to my favorite podcasts such as IRL, Without Fail, How I Built
                  This, Syntax, Asian Not Asian, Reply All, and The Cut.
                </p>
              </div>
            </div>
          </div>

          <div id='contact' className='col s12 m12 l5 contact-div'>
            <h2 className='contact-me'>CONTACT ME</h2>
            <hr />
            <div className='col s12 m12 l12 contact-list'>
              <p>
                <i className='fab fa-linkedin' aria-hidden='true' />
                https://linkedin.com/in/hannahlee1
              </p>
              <p>
                <i className='far fa-envelope' aria-hidden='true' />
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
