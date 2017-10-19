import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as salesLookupActions from '../actions/salesLookupActions';


const labelStyle = {
    display: "block",
    fontSize: "0.8em",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "0.1em"
}

const datePickerStyle = {
    display: "inline-block"
}


  class Datepickers extends Component {
      componentWillMount(){
        this.props.actions.updateMinSaleDate(Moment().subtract(this.props.time, this.props.units));
        this.props.actions.updateMaxSaleDate(Moment());
      }

      handleChangeStart = date => {
          Promise.resolve(this.props.actions.updateMinSaleDate(date)).then(() => {
            if (this.props.propertyType !== 'Select Property Type' && this.props.modalIsOpen === true) {
              this.props.actions.updateRecordCountButton(this.props.allState, [], this.props.modalIsOpen);
            } else if (this.props.propertyType !== 'Select Property Type' && this.props.modalIsOpen === false) {
              this.props.actions.updateTableRecords(this.props.allState);
          } else {
              return;
          }
          });
        }

    handleChangeEnd = date => {
        Promise.resolve(this.props.actions.updateMaxSaleDate(date)).then(() => {
          if (this.props.propertyType !== 'Select Property Type' && this.props.modalIsOpen === true) {
            this.props.actions.updateRecordCountButton(this.props.allState, this.props.recordCount, this.props.modalIsOpen);
          } else if (this.props.propertyType !== 'Select Property Type' && this.props.modalIsOpen === false) {
            this.props.actions.updateTableRecords(this.props.allState);
        } else {
            return;
        }
        });
    }

    render() {
      return (
          <div style={datePickerStyle}>
              <div style={datePickerStyle}>
                  <label style={labelStyle} className='dateRange' htmlFor='minimumSaleDate'>Min Sales Date</label>
                  <DatePicker
                      customInput={<input className='facet' placeholder='Choose Date' id='minimumSaleDate' style={{"width":"95%"}} />}
                      selected={this.props.minSaleDate}
                      selectsStart
                      startDate={this.props.minSaleDate}
                      endDate={this.props.maxSaleDate}
                      onChange={this.handleChangeStart}
                  />
              </div>

              <div style={datePickerStyle}>
                  <label style={labelStyle} className='dateRange' htmlFor='maximumSaleDate'>Max Sales Date</label>
                  <DatePicker
                      customInput={<input className='facet' placeholder='Choose Date' id='maximumSaleDate' style={{"width":"95%"}} />}
                      selected={this.props.maxSaleDate}
                      selectsEnd
                      startDate={this.props.minSaleDate}
                      endDate={this.props.maxSaleDate}
                      onChange={this.handleChangeEnd}
                  />
              </div>

          </div>
      );
    }
  }

Datepickers.propTypes = {
    actions: PropTypes.object.isRequired
}


const mapStateToProps = (state, ownProps)=>{
    return {
        allState: state.facets,
        modalIsOpen: state.modalDisplay.modalIsOpen,
        propertyType: state.facets.propertyType,
        minSaleDate: state.facets.minSaleDate,
        maxSaleDate: state.facets.maxSaleDate,
        time: ownProps.time,
        units: ownProps.units
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actions: bindActionCreators(salesLookupActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Datepickers);
