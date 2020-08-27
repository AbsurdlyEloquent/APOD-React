import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import SearchBar from './SearchBar.js'
import Item from './Item.js'
import LoadMore from './LoadMore.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=20`)
      .then(returned => returned.json())
      .then(returned => {this.setState({data: returned})});
  }

  render() {
    return (
      <div className="body">
        <header>
          <Nav />
          <h1>Amazing Spectacular Astronomy Photos</h1>
          <h4>Now in React</h4>
          <SearchBar />
        </header>
        <main>

        </main>
      </div>
    )
  }
}

export default App;
