import React from 'react'
import './Nav.css'
import Modal from './Modal.js'

export default Nav
function Nav() {
  return (
    <nav>
      <ul>
        <li onClick={today}>Today</li>
        <a href="https://apod.nasa.gov/apod/">APOD</a>
        <a href="https://github.com/AbsurdlyEloquent/apod-react">Source</a>
        <li onClick={scrollTop}>Top</li>
      </ul>
    </nav>
  )
}

function today() {

}
function scrollTop() {
  console.log("clicked!")
}
