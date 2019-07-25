import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import ZipSearch from './components/ZipSearch.js'
import CitySearch from './components/CitySearch.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data : [],
      zip : '',
      zipcode : ''
    }
  }
  
  componentDidMount(){
    this.searchUp();
  }
  searchUp=()=>{
    axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zip}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        data : res.data,
        zipcode : this.state.zip
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  zipChange=(event)=>{
    this.setState({zip: event.target.value});
  }

  render(){
   let zipResult = this.state.data.map((zipinfo)=>
    <ZipSearch data = {zipinfo}/>
   ) 

    return(
      <div>
      <h1 class= "headline">Current Zipcode: {this.state.zipcode}</h1>
      <form  className = "form">
          <label>
              Enter Zipcode:
              <input type="text" name="zipcode" value={this.state.zip} onChange={this.zipChange}/>
          </label>
      </form>
      <button onClick={this.searchUp} class = "button">Submit</button>
        {zipResult}
      </div>
    );
  }
}

export default App;
