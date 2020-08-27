import React from 'react'
import './Nav.css'

export default Nav
function Nav() {
  return (
    <nav>
      <ul>
        <li onClick={today()}>Today</li>
        <li href="https://apod.nasa.gov/apod/">APOD</li>
        <li href="https://github.com/AbsurdlyEloquent/apod-react">Source</li>
        <li onClick={scrollTop()}>Top</li>
      </ul>
    </nav>
  )
}

function today() {
  console.log("clicked!")
}
function scrollTop() {
  console.log("clicked!")
}
