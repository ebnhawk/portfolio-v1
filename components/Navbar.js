import React from 'react'
import Dropdown from './Dropdown'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = props => {
  const handleClick = evt => {
    const name = evt.target.name
    props.history.push(`#${name}`)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
      <a className="navbar-brand" href="/">
        <i className="fas fa-home" id="home" />
      </a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto" id="nav-links">
          <li className="nav-item">
            <AnchorLink
              className="nav-link"
              name="projects-container"
              href="#projects-container"
              onClick={handleClick}
            >
              Projects
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="nav-link"
              name="contact-container"
              href="#contact-container"
              onClick={handleClick}
            >
              Contact
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="nav-link"
              name="intro-container"
              href="#intro-container"
              onClick={handleClick}
            >
              About
            </AnchorLink>
          </li>
        </ul>
      </div>
      <Dropdown />
    </nav>
  )
}

export default Navbar
