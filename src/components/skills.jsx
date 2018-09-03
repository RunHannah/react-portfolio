import React, { Component } from "react";
import cssHtmlLogo from "../assets/images/skills/css-html-logo.png";
import apiLogo from "../assets/images/skills/api-logo.png";
import javascriptLogo from "../assets/images/skills/javascript-logo.png";
import nodejsLogo from "../assets/images/skills/nodejs-logo.png";
import reactLogo from "../assets/images/skills/react-logo.png";
import rubyLogo from "../assets/images/skills/ruby-logo.png";
import vscodeLogo from "../assets/images/skills/vscode-logo.png";

class Skills extends Component {
  render() {
    return (
      <div className="skills container">
        <p className="tech-skills">Technical Skills</p>
        <hr />
        <div>
          <div className="skills-logos row">
            <img className="col s2 reactLogo" src={reactLogo} alt="React" />
            <img className="col s2 nodejsLogo" src={nodejsLogo} alt="Nodejs" />
            <img
              className="col s2 javascriptLogo"
              src={javascriptLogo}
              alt="Javascript"
            />
            <img className="col s2 cssHtmlLogo" src={cssHtmlLogo} alt="HTML" />
          </div>
          <div className="skills-logos row">
            <img className="col s2 rubyLogo" src={rubyLogo} alt="ruby" />
            <img className="col s2 apiLogo" src={apiLogo} alt="API" />
            <img className="col s2 vscodeLogo" src={vscodeLogo} alt="vscode" />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
