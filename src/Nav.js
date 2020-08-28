import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
  today = () => {
    this.props.today()
  }
  scrollTop = () => {
    this.props.scrollTop()
  }
  render() {
    return (
      <nav>
        <ul className="list">
          <li onClick={this.today}>Today</li>
          <a href="https://apod.nasa.gov/apod/">APOD</a>
          <a href="https://github.com/AbsurdlyEloquent/apod-react">Source</a>
          <li onClick={this.scrollTop}>Top</li>
        </ul>
      </nav>
    )
  }
}

export default Nav
