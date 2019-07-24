import React, {Component} from 'react';
import axios from 'axios';

class ZipSearch extends Component {
    constructor(props){
      super(props);
      this.state= {
        City: [],
        State: [],
        Lat: [],
        Long: [],
        Population: [],
        Wage: [],
        zip: "",
        zipcode: ""
      }
    }
  
    componentDidMount(){
      this.showData();
    }
  
    showData=()=>{
      axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zipcode}`)
      .then(res => {
        this.setState({
          City: res.data[0].City,
          State: res.data[0].State,
          Lat: res.data[0].Lat,
          Long: res.data[0].Long,
          Population: res.data[0].EstimatedPopulation,
          Wage: res.data[0].TotalWages
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
    searchUp=()=>{
      this.setState({zipcode: this.state.zip})
      this.showData();
      this.showData();
    }
    zipChange=(event)=>{
      this.setState({zip: event.target.value});
    }
    render(){
      return (
        <div>
          <p>Current Zipcode: {this.state.zipcode}</p>
          <form onSubmit={()=>this.search} className = "form">
              <label>
                  Enter Zipcode:
                  <input type="text" name="zipcode" value={this.state.zip} onChange={this.zipChange}/>
              </label>
          </form>
          <button onClick={()=>this.searchUp()}>Submit</button>
        </div>
      );
    }
  }


export default ZipSearch;