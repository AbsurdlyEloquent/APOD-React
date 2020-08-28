import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hidden: props.hidden,
      src: props.modalProps.hdurl,
      title: props.modalProps.title,
      explan: props.modalProps.explanation,
    }
  }

  render() {
    return (
      <div id={this.hidden} className="modalRoot" style={this.style}>
        <div className="modal">
          <h3>{this.state.title}</h3>
          <img src={this.state.src} alt="Retrieved from NASA Api"/>
          <p>{this.state.explan}</p>
        </div>
      </div>
    )
  }
}

export default Modal
