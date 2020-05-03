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
          </div>

          <div id='contact' className='col s12 m12 l5 contact-div'>
            <h2 className='contact-me'>CONTACT ME</h2>
            <hr />
            <div className='col s12 m12 l12 contact-list'>
              <p>
                <i className='fab fa-linkedin' aria-hidden='true' />
                https://linkedin.com/in/hannahlee1
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
