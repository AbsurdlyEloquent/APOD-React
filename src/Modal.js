import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props)

    this.props = props
    console.log(props.id)
  }

  render() {
    return (
      <div id={this.props.id} className="modalRoot" onClick={this.props.hide}>
        <div className="modal">
          <h3>{this.props.modalProps.title}</h3>
          <img src={this.props.modalProps.hdurl} alt="Retrieved from NASA Api"/>
          <p>{this.props.modalProps.explanation}</p>
          <p onClick={this.props.hide} className="x">&times;</p>
        </div>
      </div>
    )
  }
}

export default Modal
