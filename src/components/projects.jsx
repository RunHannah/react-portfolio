import React, { Component } from 'react';
import ProjectsData from '../assets/data/projects_data';

class Projects extends Component {
  state = {
    projects: ProjectsData
  };

  render() {
    const projects = this.state.projects;

    return (
      <div className="projects">
        <p className="project-title">PROJECTS</p>

        <article className="cards">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <img src={project.img} alt="project" />
              <div className="text">
                <p className="card-title">{project.name}</p>
                <p className="project-info">{project.info}</p>
                <span className="links">
                  <a href={project.githubLink} target="_blank">
                    GITHUB
                  </a>
                  <a href={project.liveLink} target="_blank">
                    DEMO
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
