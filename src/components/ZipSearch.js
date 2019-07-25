import React, {Component} from 'react';
import './ZipSearch.css';

class ZipSearch extends Component {
    constructor(props){
      super(props);
    }
    render(){
      var City = this.props.data.City;
      var State = this.props.data.State;
      var Long = this.props.data.Long;
      var Lat = this.props.data.Lat;
      var Pop = this.props.data.EstimatedPopulation;
      var Wage = this.props.data.TotalWages;

      return (
        <div>
          <table class = "table">
            <th>{City}</th>
        <tr>
          <td><div>State : {State}</div></td>
        </tr>
        <tr>
          <td><div>Location: ({Long},{Lat})</div></td>
        </tr>
        <tr>
          <td><div>Population(Estimated): {Pop}</div></td>
        </tr>
        <tr>
          <td><div>Total Wage: {Wage}</div></td>
        </tr>
          </table>
        </div>
      );
    }
  }


export default ZipSearch;