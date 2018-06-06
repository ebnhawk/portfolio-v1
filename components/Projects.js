import React, { Component } from 'react'
import projectsList from './projectsList'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: projectsList
    }
  }

  render() {
    return (
      <div id="projects">
        <h1 id="projects-title" data-aos="fade-in" className="white display-4">
          Projects
        </h1>
        <div id="projects-grid">
          {this.state.projects.map(project => {
            return (
              <div className="card project-card" key={project.id}>
                <div className="card-body">
                  <img src={project.img} className="project-img" />
                  <h3 className="card-title">{project.name}</h3>
                  <p className="card-subtitle mb-2">
                    {`${project.desc} Built with ${project.tools}.`}
                  </p>
                  <div id="project-buttons">
                    <a href={project.demo} target="new">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        id="demo-button"
                      >
                        Demo
                      </button>
                    </a>
                    <a href={project.github} target="new">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        id="github-button"
                      >
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Projects
