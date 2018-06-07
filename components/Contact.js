import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
      <h1 id="contact-title" data-aos="fade-in" className="white display-4">
        Contact
      </h1>
      <div id="icons-container" className="display-4 white-link">
        <a href="mailto:hello@mollyfhanes.com">
          <i className="fas fa-envelope-square" id="email" />
        </a>
        <a href="https://www.linkedin.com/in/mollyfhanes/" target="new">
          <i className="fab fa-linkedin" id="linkedin" />
        </a>
        <a href="https://github.com/ebnhawk" target="new">
          <i className="fab fa-github" id="github" />
        </a>
      </div>
    </div>
  )
}

export default Contact
