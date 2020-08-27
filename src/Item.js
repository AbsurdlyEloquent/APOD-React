import React, { Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props)

    this.setState({
      src: props.url,
      key: props.key
    })
  }
}
