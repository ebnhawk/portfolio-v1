import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
      <h1 id="contact-title" data-aos="fade-in" className="white display-4">
        Contact
      </h1>
      <table>
        <tr>
          <td>
            <h3 className="white">E-mail:</h3>
          </td>
          <td>
            <h3>
              <a href="mailto:hello@mollyfhanes.com">hello@mollyfhanes.com</a>
            </h3>
          </td>
        </tr>
        <tr>
          <td>
            <h3 className="white">LinkedIn:</h3>
          </td>
          <td>
            <h3>
              <a href="https://www.linkedin.com/in/mollyfhanes/" target="new">
                linkedin.com/in/mollyfhanes
              </a>
            </h3>
          </td>
        </tr>
        <tr>
          <td>
            <h3 className="white">Github:</h3>
          </td>
          <td>
            <h3>
              <a href="https://github.com/ebnhawk" target="new">
                github.com/ebnhawk
              </a>
            </h3>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Contact
