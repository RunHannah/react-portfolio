import React, { Component } from 'react';
import ProjectsData from '../assets/data/projects_data';

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

        <article className="cards">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <img src={project.img} alt="project" />
              <div className="text">
                <p className="card-title">{project.name}</p>
                <p>{project.info}</p>
                <span className="links">
                  <a href={project.githubLink} target="_blank">
                    Github
                  </a>
                  <a href={project.liveLink} target="_blank">
                    Live Demo
                  </a>
                </span>
              </div>
            </div>
          ))}
        </article>
      </div>
    );
  }
}

export default Projects;
