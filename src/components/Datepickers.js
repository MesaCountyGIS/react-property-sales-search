import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import Moment from 'moment';


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
      constructor(props){
          super(props);
          this.state = {
              startDate: Moment().subtract(props.time, props.units),
              endDate: Moment()
          };
      }

      handleChangeStart = date => {
        this.setState({
          startDate: date
        });
        }

        handleChangeEnd = date => {
          this.setState({
            endDate: date
          });
          }



    render() {
      return (
          <div style={datePickerStyle}>
              <div style={datePickerStyle}>
                  <label style={labelStyle} className='dateRange' htmlFor='minimumSaleDate'>Min Sales Date</label>
                  <DatePicker
                      customInput={<input className='facet' placeholder='Choose Date' id='minimumSaleDate' style={{"width":"95%"}} />}
                      selected={this.state.startDate}
                      selectsStart
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onChange={this.handleChangeStart}
                  />
              </div>

              <div style={datePickerStyle}>
                  <label style={labelStyle} className='dateRange' htmlFor='maximumSaleDate'>Max Sales Date</label>
                  <DatePicker
                      customInput={<input className='facet' placeholder='Choose Date' id='maximumSaleDate' style={{"width":"95%"}} />}
                      selected={this.state.endDate}
                      selectsEnd
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onChange={this.handleChangeEnd}
                  />
              </div>

          </div>
      );
    }
  }

  Datepickers.propTypes = {
      time: PropTypes.number.isRequired,
      units: PropTypes.string.isRequired,
  }


export default Datepickers;
