import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import zipSearch from './components/ZipSearch.js'
import citySearch from './components/CitySearch.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      test: []
    }
  }

  componentDidMount(){
    this.test();
  }

  test=()=>{
    axios.get("http://ctp-zip-api.herokuapp.com/zip/10016")
    .then(res => {
      console.log(res);
      this.setState({
        test: res.data[0].Country
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  render(){
    return (
      <div>

        {this.state.test}
      </div>
    );
  }
}

export default App;
