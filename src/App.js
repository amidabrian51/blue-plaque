import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state ={
      signs:  [],
      searchField: ''
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
    const {signs, searchField } = this.state;
    const filteredSigns = signs.filter(sign => sign.title.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className='App'>
        <SearchBox
          placeholder= 'location'
          handleChange= {e=> this.setState({searchField: e.target.value})}
        />
        {/* <input type='search' 
        placeholder='location' 
        onChange={e=> this.setState({searchField: e.target.value})} 
        /> */}
        <CardList signs={filteredSigns}/>
      
      </div>
    )
  }
}

export default App;
