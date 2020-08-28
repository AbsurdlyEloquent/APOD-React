import React, { Component } from 'react'
import './Item.css'

class Item extends Component {
  constructor(props) {
    super(props)

    this.state ={
      src: props.src
    }
  }
  render = () => {
    return (
      <div style={{background: `url('${this.state.src}')`}} className="box"></div>
    )
  }
}

export default Item
