import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props)

    this.props = props
  }

  render() {
    return (
      <div id={this.props.hidden} className="modalRoot" style={this.style}>
        <div className="modal">
          <h3>{this.props.modalProps.title}</h3>
          <img src={this.props.modalProps.hdurl} alt="Retrieved from NASA Api"/>
          <p>{this.props.modalProps.explanation}</p>
          <p onClick={()=>this.props.hidden = "hidden"}>&times;</p>
        </div>
      </div>
    )
  }
}

export default Modal
