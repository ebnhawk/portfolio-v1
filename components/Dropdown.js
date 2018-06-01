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
          <ul>
            <li>HELLO THERE FRIEND</li>
          </ul>
        ) : (
          <div />
        )}
      </div>
    )
  }
}

export default Dropdown
