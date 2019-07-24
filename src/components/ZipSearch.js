import React, {Component} from 'react';
import axios from 'axios';

class ZipSearch extends Component {
    constructor(props){
      super(props);
      this.state= {
        test: [],
        test2: []
      }
    }
  
    componentDidMount(){
      this.test();
    }
  
    test=()=>{
      axios.get("http://ctp-zip-api.herokuapp.com/zip/10303")
      .then(res => {
        console.log(res);
        this.setState({
          test: res.data[0].City,
          test2: res.data[0].Country
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
    render(){
      return (
        <div>
          {this.state.test};
          {this.state.test2};
        </div>
      );
    }
  }


export default ZipSearch;