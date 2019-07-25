import React, { Component } from 'react';

class ZipShow extends Component {
    render() {
        var {
            city,
            state,
            lat,
            long,
            population,
            wage
        } = this.props.data;
        return(
            <li>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Location: ({lat},{long})</p>
                <p>Population(Estimated): {population}</p>
                <p>Total Wage: {wage}</p>
            </li>
        );



    }
}

export default ZipShow;