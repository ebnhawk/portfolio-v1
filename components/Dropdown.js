import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Dropdown extends Component {
  constructor() {
    super()
    this.state = { open: false }
    this.handleClick = this.handleClick.bind(this)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => ({ open: !prevState.open }))
  }
  handleLinkClick(evt) {
    const name = evt.target.name
    this.props.history.push(`#${name}`)
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
            <AnchorLink
              className="dropdown-item"
              name="intro"
              href="#intro"
              onClick={this.handleLinkClick}
            >
              Top
            </AnchorLink>
            <AnchorLink
              className="dropdown-item"
              name="projects"
              href="#projects"
              onClick={this.handleLinkClick}
            >
              Projects
            </AnchorLink>
            <AnchorLink
              className="dropdown-item"
              name="contact"
              href="#contact"
              onClick={this.handleLinkClick}
            >
              Contact
            </AnchorLink>
          </div>
        ) : (
          <div />
        )}
      </div>
    )
  }
}

export default Dropdown
