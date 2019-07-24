import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import ZipSearch from './components/ZipSearch.js'
import CitySearch from './components/CitySearch.js'

class App extends Component {
  render(){
    return(
      <div>
        <CitySearch/>
      </div>
    );
  }
}

export default App;
