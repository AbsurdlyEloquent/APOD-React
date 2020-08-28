import React, { Component } from 'react'
import './Item.css'

class Item extends Component {
  constructor(props) {
    super(props)

    this.state ={
      src: props.src,
      index: props.index,
      hidden: "hidden"
    }
  }
  handler = (e) => {
    this.props.handler(e)
  }
  componentDidMount() {
    let that = this
    setTimeout(()=>{
      that.show()
    }, 250*that.state.index)
  }
  show() {
    this.setState({hidden: ""})
  }
  render = () => {
    return (
      <div onClick={e=>this.handler(e)} id={this.state.hidden} style={{background: `url('${this.state.src}')`}} className='box' index={this.state.index}></div>
    )
  }
}

export default Item
