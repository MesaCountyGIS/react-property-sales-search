import React, { Component } from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net';

const columns = [
    {title: "Parcel Number (Click for map)"},
    {title: "Account Number (Click for details)"},
    {title: "Reception No./Book Page (Click for Doc.)"},
    {title: "Address"},
    {title: "Sale Price"},
    {title: "Sale Date"},
    {title: "Grantee"},
    {title: "Grantor"},
    // {title: "Actual Value"},
    // {title: "Qualification Code"},
    // {title: "Vacant Code"},
    // {title: "Neighborhood"},
    // {title: "Economic Area"},
    // {title: "Property Use"},
    // {title: "Total Heated Sq Ft"},
    // {title: "Price by Heated SQFT"},
    // {title: "Aprox. Acres"},
    // {title: "Architectual Style 1st Building"},
    // {title: "Total # Buildings"},
    // {title: "Earliest Effective Year Built"}
];

const dataSet = [
    ["2458-254-14-125", "R05222", "125478", "584 Sunny Meadow Lane", "$360000", "10/15/17", "Some Guy", "Me"],
    ["2458-254-14-124", "R04422", "125478", "584 Another St", "$400000", "10/15/17", "Some Other Guy", "Me"]
];


  class Table extends Component {

      constructor(props){
          super(props)
          this.state = {
              isShown: true
          }
      }

      componentDidMount() {
        $(this.refs.main).DataTable({
           dom: '<"data-table-wrapper"t>',
           data: dataSet, columns,
           ordering: false
        });
    }
    componentWillUnmount(){
       $('.data-table-wrapper')
       .find('table')
       .DataTable()
       .destroy(true);
    }
    shouldComponentUpdate() {
        return false;
    }

    render() {
      return (
          <div>
              <table ref="main" />
          </div>
        //   <table style={{"display": this.state.isShown?"block": "none"}} id="table" className="row-border hover">
        //       <thead>
        //           <tr>
        //               <th>Parcel Number (Click for map)</th>
        //               <th>Account Number (Click for details)</th>
        //               <th>Reception No./Book Page (Click for Doc.)</th>
        //               <th>Address</th>
        //               <th>Sale Price</th>
        //               <th>Sale Date</th>
        //               <th>Grantee</th>
        //               <th>Grantor</th>
        //               <th>Actual Value</th>
        //               <th>Qualification Code</th>
        //               <th>Vacant Code</th>
        //               <th>Neighborhood</th>
        //               <th>Economic Area</th>
        //               <th>Property Use</th>
        //               <th>Total Heated Sq Ft</th>
        //               <th>Price by Heated SQFT</th>
        //               <th>Aprox. Acres</th>
        //               <th>Architectual Style 1st Building</th>
        //               <th>Total # Buildings</th>
        //               <th>Earliest Effective Year Built</th>
        //           </tr>
        //       </thead>
        //       <tbody></tbody>
        //   </table>
      );
    }
  }


export default Table;
