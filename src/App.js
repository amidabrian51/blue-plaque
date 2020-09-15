import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      signs:  []
    }
  }

  componentDidMount(){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://s3.eu-west-2.amazonaws.com/openplaques/open-plaques-london-2019-03-13.json'
    fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(plaque => this.setState({signs: plaque}));
  }
  render(){
    return(
      <div className='App'>
        {this.state.signs.map(sign=> <h1 key={sign.id}>{sign.inscription}</h1>)}
      </div>
    )
  }
}

export default App;
