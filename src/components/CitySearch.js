import React, {Component} from 'react';
import axios from 'axios';

class CitySearch extends Component {
    constructor(props){
      super(props);
    }
      render(){
        var Zip = this.props.data;

        return (
          <div>
            <table class = "table">
              <th>{Zip}</th>
            </table>
          </div>
        );
    }
    
  }


export default CitySearch;