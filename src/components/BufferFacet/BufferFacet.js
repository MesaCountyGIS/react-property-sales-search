import React, { Component } from 'react';
import RangeFacetLabel from '../RangeFacetLabel';
import Autocomplete from '../Autocomplete';
import ClearButton from '../ClearButton';
import LabeledInput from '../LabeledInput';
import './style/bufferFacet.css';

const bufferFacetStyle = {
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5em 0 1em 0.5em',
    marginLeft: '1.75em',
    marginBottom:'1em',
    marginTop: '1em',
    height: '5em',
    width: '85%',
    boxShadow: '1px 1px 5px #888888'
}

  class BufferFacet extends Component {
      distanceChanged = i =>{
          //if the address box is empty, show error popup to customer
          if(this.props.address === ""){
             window.confirm(`Please enter a parcel number or address above before trying to buffer.`);
         }else{
             Promise.resolve(this.props.updateDistance(i.target.value))
             .then(() =>this.props.updateRecordCount(this.props.state));
         }
      }

      clearList = () =>{
          this.props.updateAddress("");
          this.props.updateDistance(0)
          return
      }

    render() {
      return (
          <div style={bufferFacetStyle}>
              <RangeFacetLabel
                  value="Buffer"
              />
              <Autocomplete
                  title="Enter Address or Parcel No."
                  url='http://localhost:3000/query/retrieve/address'
                  completedItem={this.props.address}
                  updateStore={this.props.updateAddress}
              />
              <ClearButton clearFunction={this.clearList} />
              <LabeledInput
                  labelBefore="Buffer above entry"
                  labelAfter="miles"
                  valueFromState={this.props.distance}
                  updateState={this.distanceChanged}
                  type='number'
                  min='0'
                  step='.25'
                  name='buffer'
                  className='facet milesBuffer'
              />
          </div>
      );
    }
  }

export default BufferFacet;
