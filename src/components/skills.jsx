import React, { Component } from "react";
import cssHtmlLogo from "../assets/images/skills/css-html-logo.png";
import apiLogo from "../assets/images/skills/api-logo.png";
import javascriptLogo from "../assets/images/skills/javascript-logo.png";
import nodejsLogo from "../assets/images/skills/nodejs-logo.png";
import reactLogo from "../assets/images/skills/react-logo.png";
import rubyLogo from "../assets/images/skills/ruby-logo.png";
import vscodeLogo from "../assets/images/skills/vscode-logo.png";
import postmanLogo from "../assets/images/skills/postman-logo.png";
import mongodbLogo from "../assets/images/skills/mongodb-logo.png";
import expressLogo from "../assets/images/skills/express-logo.png";
import postgresLogo from "../assets/images/skills/postgres-logo.png";
import gitLogo from "../assets/images/skills/git-logo.png";

class Skills extends Component {
  render() {
    return (
      <div className="skills container">
        <p className="tech-skills">Technical Skills</p>
        <hr />
        <div className="row wrapper tech-images">
          <img className="col s12 reactLogo" src={reactLogo} alt="React" />
          <img
            className="col s12 javascriptLogo"
            src={javascriptLogo}
            alt="Javascript"
          />
          <img className="col s12 cssHtmlLogo" src={cssHtmlLogo} alt="HTML" />
          <img className="col s12 nodejsLogo" src={nodejsLogo} alt="Nodejs" />
          <img
            className="col s12 expressLogo"
            src={expressLogo}
            alt="Express"
          />
          <img className="col s12 rubyLogo" src={rubyLogo} alt="ruby" />
          <img className="col s12 apiLogo" src={apiLogo} alt="API" />
          <img
            className="col s12 postmanLogo"
            src={postmanLogo}
            alt="postman"
          />
          <img
            className="col s12 postgresLogo"
            src={postgresLogo}
            alt="postgres"
          />
          <img
            className="col s12 mongodbLogo"
            src={mongodbLogo}
            alt="MongoDB"
          />
          <img className="col s12 vscodeLogo" src={vscodeLogo} alt="vscode" />
          <img className="col s12 gitLogo" src={gitLogo} alt="git" />
        </div>
      </div>
    );
  }
}

export default Skills;
