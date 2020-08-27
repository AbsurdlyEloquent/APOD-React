import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import SearchBar from './SearchBar.js'
import Item from './Item.js'
import LoadMore from './LoadMore.js'
import Modal from './Modal.js'

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
      <Modal display={this.modalDisplay}/>
        <header className="header">
          <Nav today={this.today} scrollTop={this.scrollTop}/>
            <section className="section">
              <h1>Amazing Spectacular Astronomy Photos</h1>
              <h4>Now in React</h4>
              <SearchBar />
            </section>
        </header>
        <main>

        </main>
      </div>
    )
  }
  today() {
    modalDisplay = true
  }
  scrollTop() {
    console.log('clicked2!')
  }
  modalDisplay = false
}

export default App;
