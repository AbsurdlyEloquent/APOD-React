import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import SearchBar from './SearchBar.js'
import Item from './Item.js'
import Modal from './Modal.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      modalKey: null,
      modalProps: {},
      modalHidden: "hidden"
    }
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=20`)
      .then(returned => returned.json())
      .then(returned => {this.setState({data: returned})});
  }

  render = () => {
    console.log(this.state.modalHidden)
    return (
      <div className="body">
      <Modal key={this.state.modalKey} id={this.state.modalHidden} modalProps={this.state.modalProps} hide={this.hideModal}/>
        <header className="header">
          <Nav today={this.today} scrollTop={this.scrollTop}/>
          <section className="section">
            <h1>Amazing Spectacular Astronomy Photos</h1>
            <h4><i>Now in React</i></h4>
          </section>
          <SearchBar handler={this.setModal}/>
        </header>
        <main className="main">
        {/* js */}
          {this.state.data.map((item,i)=>{
            return <Item handler={this.setModal} className="box" key={i} src={item.url} index={i} />
          })}
        {/* js */}
        </main>
      </div>
    )
  }
  today = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res=>res.json())
      .then(res=>{
        this.setState({modalProps: res, modalHidden: ""})
        console.log(this.state.modalProps)
      });
  }
  setModal = (e) => {
    console.log(e.target.tagName)
    e.preventDefault()
    if(e.target.tagName === 'DIV') {
      let i = e.target.getAttribute("index")
      console.log(i)
      this.setState({
        modalProps: this.state.data[i],
        modalHidden: ""
      })
    } else if (e.target.tagName === 'FORM') {
      console.log(e.target.children[0].value)
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${e.target.children[0].value}`)
        .then(res=>res.json())
        .then(res=>{
          this.setState({modalProps: res, modalHidden:""})
          console.log(this.state.modalProps);
        });
    }
  }
  hideModal = () => {
    this.setState({
      modalKey: null,
      modalProps: {},
      modalHidden: "hidden"
    })
  }
  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

export default App;
