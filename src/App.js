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
      data: [],
      modalProps: {},
      modalDisplay: true
    }
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=20`)
      .then(returned => returned.json())
      .then(returned => {this.setState({data: returned})});
  }

  render = () => {

    return (
      <div className="body">
      <Modal display={this.state.modalDisplay} modalProps={this.state.modalProps}/>
        <header className="header">
          <Nav today={this.today} scrollTop={this.scrollTop}/>
            <section className="section">
              <h1>Amazing Spectacular Astronomy Photos</h1>
              <h4>Now in React</h4>
            </section>
            <SearchBar />
        </header>
        <main className="main">
        {/* js */}
          {this.state.data.map((item,index)=>{
            return (
              this.makeSections(item,index)
            )
          })}
        {/* js */}
        </main>
      </div>
    )
  }
  today = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=2020-08-27`)
      .then(res=>res.json())
      .then(res=>{
        this.setState({modalProps: res, modalDisplay: true})
        console.log(this.state.modalProps)
      });
  }
  scrollTop() {
    console.log('clicked2!')
  }
  makeSections(item, i) {
    return setTimeout(()=>{
      return (<Item className="box" key={item.date} src={item.url} />)
    },250*i)
  }
}

export default App;
