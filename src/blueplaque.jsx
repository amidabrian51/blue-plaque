import React, { Component } from 'react';

// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class bluePlaque extends Component {
  constructor(){
    super();
    this.state ={
      signs:  [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({searchField: e.target.value})
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
          handleChange= {this.handleChange}
        />
        
        <CardList signs={filteredSigns}/>
      
      </div>
    )
  }
}

export default bluePlaque;