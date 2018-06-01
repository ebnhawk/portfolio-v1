import React, { Component } from 'react'
import projectsList from './projectsList'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: projectsList,
      selected: 1
    }
    this.isSelected = this.isSelected.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  isSelected(id) {
    return this.state.selected === id ? 'active' : ''
  }
  handleClick(evt) {
    this.setState({ selected: parseInt(evt.target.id) })
  }
  render() {
    return (
      <div id="projects-container">
        <h1 id="projects-title" data-aos="fade-in" className="white display-4">
          Projects
        </h1>
        <div className="list-group" id="project-list-container">
          {this.state.projects.map(project => {
            return (
              <div
                className={`list-group-item list-group-item-action flex-column align-items-start ${this.isSelected(
                  project.id
                )}`}
                key={project.id}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h3
                    className="mb-1 point project-title"
                    onClick={this.handleClick}
                    id={project.id}
                  >
                    {project.name}
                  </h3>
                </div>
                <p className="mb-1 spacer">{project.desc}</p>
                <h5>Tools:</h5>
                <p className="mb-1 spacer">{project.tools}</p>
                <h5>Features:</h5>
                <ul>
                  {project.contributions.map((cont, i) => {
                    return <li key={i}>{cont}</li>
                  })}
                </ul>
                <span className="badge badge-primary badge-pill white-link">
                  <a href={project.demo}>Demo</a>
                </span>
                <span className="badge badge-primary badge-pill white-link">
                  <a href={project.github}>GitHub</a>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Projects
