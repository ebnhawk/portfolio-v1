import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Intro = props => {
  const handleClick = () => {
    props.history.push('#projects')
  }
  return (
    <div className="animated fadeIn fade" id="intro-container">
      <h1 className="display-3 white" id="intro-title">
        Molly Hanes
      </h1>
      <h2 className="white" id="subtext">
        Software Engineer
      </h2>
      <img src="/me.jpg" id="me" />
      <AnchorLink href="#projects-container" onClick={handleClick}>
        <i
          className="fas fa-angle-double-down animated infinite pulse"
          id="arrow"
        />
      </AnchorLink>
    </div>
  )
}

export default Intro
