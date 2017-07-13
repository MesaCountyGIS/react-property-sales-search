import React, { Component } from 'react';

  class Table extends Component {

      constructor(props){
          super(props)
          this.state = {
              isShown: false
          }
      }
    render() {
      return (
          <table style={{"display": this.state.isShown?"block": "none"}} id="table" className="row-border hover">
              <thead>
                  <tr>
                      <th>Parcel Number (Click for map)</th>
                      <th>Account Number (Click for details)</th>
                      <th>Reception No./Book Page (Click for Doc.)</th>
                      <th>Address</th>
                      <th>Sale Price</th>
                      <th>Sale Date</th>
                      <th>Grantee</th>
                      <th>Grantor</th>
                      <th>Actual Value</th>
                      <th>Qualification Code</th>
                      <th>Vacant Code</th>
                      <th>Neighborhood</th>
                      <th>Economic Area</th>
                      <th>Property Use</th>
                      <th>Total Heated Sq Ft</th>
                      <th>Price by Heated SQFT</th>
                      <th>Aprox. Acres</th>
                      <th>Architectual Style 1st Building</th>
                      <th>Total # Buildings</th>
                      <th>Earliest Effective Year Built</th>
                  </tr>
              </thead>
              <tbody></tbody>
          </table>
      );
    }
  }


export default Table;
