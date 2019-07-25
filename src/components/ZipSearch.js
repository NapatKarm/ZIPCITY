import React, {Component} from 'react';
import axios from 'axios';

function Searched(props){
  return(
    <div>
      <p>This Actually Works! The City is {props.city} and wage is {props.wage}</p>
    </div>
  )
}
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
      this.searchUp();
    }
    searchUp=()=>{
      this.setState({zipcode: this.state.zip})
      axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zipcode}`)
      .then(res => {
        this.setState({
          city: res.data[3].City,
          state: res.data[2].State,
          lat: res.data[2].Lat,
          long: res.data[2].Long,
          population: res.data[2].EstimatedPopulation,
          wage: res.data[3].TotalWages
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
      return (
        <div>
          <p>Current Zipcode: {this.state.zipcode}</p>
          <form  className = "form">
              <label>
                  Enter Zipcode:
                  <input type="text" name="zipcode" value={this.state.zip} onChange={this.zipChange}/>
              </label>
          </form>
          <button onClick={()=>this.searchUp()}>Submit</button>
          <Searched city = {this.state.city} wage = {this.state.wage}/>
        </div>
      );
    }
  }


export default ZipSearch;