import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      src: "",
      title: "",
      explan: "",
    }
  }
  render() {
    return (
      <div className="modalRoot">
        <div className="modal">
          <h3>{this.title}</h3>
          <img src={this.src} />
          <p>{this.explan}</p>
        </div>
      </div>
    )
  }
}

export default Modal
