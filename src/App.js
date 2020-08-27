import React, { Component } from 'react';
import './App.css';

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
          <h5>Now in React</h5>
          <SearchBar />
        </header>
        <main>
          {this.state.data.map(item => {
            return (
              <Item key={item.date} title={item.title} explan={item.explanation} url={item.url} hdurl={item.hdurl}/>
            )
          })}
        </main>
      </div>
    )
  }
}

export default App;
