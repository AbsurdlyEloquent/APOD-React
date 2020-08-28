import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: props.modalDisplay,
      src: props.modalProps.hdurl,
      title: props.modalProps.title,
      explan: props.modalProps.explanation,
    }
  }

  render() {
    if (this.state.display === true) {
      return (
        <div className="modalRoot" style={this.style}>
          <div className="modal">
            <h3>{this.state.title}</h3>
            <img src={this.state.src} alt="Retrieved from NASA Api"/>
            <p>{this.state.explan}</p>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Modal
