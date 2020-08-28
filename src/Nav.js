import React from 'react'
import './Nav.css'

function Nav(props) {
  return (
    <nav>
      <ul className="list">
        <li onClick={props.today}>Today</li>
        <a href="https://apod.nasa.gov/apod/">APOD</a>
        <a href="https://github.com/AbsurdlyEloquent/apod-react">Source</a>
        <li onClick={props.scrollTop}>Top</li>
      </ul>
    </nav>
  )
}

export default Nav
