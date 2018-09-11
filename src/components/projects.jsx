import React, { Component } from "react";
import ProjectsData from "../assets/data/projects_data";

class Projects extends Component {
  state = {
    projects: ProjectsData
  };

  render() {
    const projects = this.state.projects;

    return (
      <div className="projects container">
        <p className="project-list">Projects</p>
        <hr />
        <div className="row flex">
          {projects.map((project, index) => (
            <div className="col m6" key={index}>
              <div className="card" key={index}>
                <div className="card-image">
                  <img src={project.img} />
                </div>
                <div className="card-content">
                  <span className="card-title">{project.name}</span>
                  <p>{project.info}</p>
                </div>
                <div className="card-action">
                  <a href={project.githubLink}>Github</a>
                  <a href={project.liveLink}>Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
