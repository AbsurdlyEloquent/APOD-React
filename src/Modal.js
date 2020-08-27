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
  componentDidMount() {
    if (this.state.display = false) {
      this.style = {opacity: 0}
    } else {
      this.style = {opacity: 1}
    }
  }
  render() {
    return (
      <div className="modalRoot" style={this.style}>
        <div className="modal">
          <h3>{this.state.title}</h3>
          <img src={this.state.src} alt="image"/>
          <p>{this.state.explan}</p>
        </div>
      </div>
    )
  }
}

export default Modal
