import React from 'react'
import './Modal.css'

function Modal(props) {
  return (
    <div id={props.id} className="modalRoot" onClick={props.hide}>
      <div className="modal">
        <h3>{props.modalProps.title}</h3>
        <img src={props.modalProps.hdurl} alt="Retrieved from NASA Api"/>
        <p>{props.modalProps.explanation}</p>
        <p onClick={props.hide} className="x">&times;</p>
      </div>
    </div>
  )
}

export default Modal
