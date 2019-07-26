import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import ZipSearch from './components/ZipSearch.js'
import CitySearch from './components/CitySearch.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      zipdata : [],
      data : [],
      zip : '',
      city : '',
      cityname : '',
      zipcode : '',
      status : true
    }
  }

  searchUpCity=()=>{
    axios.get(`http://ctp-zip-api.herokuapp.com/city/${this.state.city.toUpperCase()}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        data : res.data,
        cityname : this.state.city,
        zip : ''
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  searchUpZip=()=>{
    axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zip}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        zipdata : res.data,
        zipcode : this.state.zip,
        city : ''
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  zipChange=(event)=>{
    this.setState({zip: event.target.value});
  }
  cityChange=(event)=>{
    this.setState({city: event.target.value});
  }
  changeToZip=(event)=>{
    this.setState({status : true})
  }
  changeToCity=(event)=>{
    this.setState({status : false})
  }
  render(){
   let zipResult = this.state.zipdata.map((zipinfo)=>
    <ZipSearch data = {zipinfo}/>
   )

   let cityResult = this.state.data.map((zipinfo)=>
   <CitySearch data = {zipinfo}/>
  ) 

    return(
      <div>
        <button onClick={this.changeToZip} class = "button">Zip Search</button><button onClick={this.changeToCity} class = "button">City Search</button>
        {this.state.status ? (
      <div>
      <h1 class= "headline">Current Zipcode: {this.state.zipcode}</h1>
      <form  className = "form">
        <label>
          Enter Zipcode:
          <input type="text" name="zipcode" value={this.state.zip} onChange={this.zipChange}/>
          <br></br>
        </label>
      </form>

      <button onClick={this.searchUpZip} class = "button">Submit Zip</button>
      </div>
        )
        :
        (
      <div>
      <h1 class= "headline">Current City: {this.state.cityname}</h1>
      <form className = "form">
        <label>
          Enter City:
            <input type="text" name="city" value={this.state.city} onChange={this.cityChange}/>
            <br></br>
        </label>
      </form>
      <button onClick={this.searchUpCity} class = "button">Submit City</button>
      </div>
      )}
      {this.state.status ? zipResult : cityResult}
      {/* {cityResult} */}
      </div>
    );
  }
}

export default App;
