import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import ZipSearch from './components/ZipSearch.js'
import CitySearch from './components/CitySearch.js'

class App extends Component {
  render(){
    return(
      <div>
        <p>This is result of City Search</p>
        <br></br>
        <CitySearch/>
        <br></br>
        <p>This is result of Zip Search</p>
        <br></br>
        <ZipSearch/>
      </div>
    );
  }
}

export default App;
