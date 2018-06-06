import React, { Component } from 'react'

class Dropdown extends Component {
  constructor() {
    super()
    this.state = { open: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => ({ open: !prevState.open }))
  }
  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          <i className="fas fa-bars white" id="nav-icon" />
        </div>
        {this.state.open ? (
          <div
            className="dropdown-menu dropdown-menu-right show"
            x-placement="bottom-start"
            id="menu"
          >
            <a className="dropdown-item" href="#intro">
              Top
            </a>
            <a className="dropdown-item" href="#projects">
              Projects
            </a>
            <a className="dropdown-item" href="#contact">
              Contact
            </a>
          </div>
        ) : (
          <div />
        )}
      </div>
    )
  }
}

export default Dropdown
