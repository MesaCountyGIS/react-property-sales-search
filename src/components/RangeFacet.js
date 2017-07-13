import React, { Component } from 'react';

import PropTypes from 'prop-types';

const rangeFacetStyle = {
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5em 0 2em 1.5em',
    marginBottom:'1em',
    top: '0',
    height: '2.8em',
    width: '90%',
    boxShadow: '1px 1px 5px #888888'
}
const rangeFacetLabelStyle = {
    display: 'block',
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: '#C4C4C4',
    margin: '0 0 0.4em 0',
    textAlign:'left',
    borderBottom: '1px solid #ccc'
}

const rangeBlock = {
    position: "relative",
    float: "left",
    lineHeight: "1.1em",
    paddingRight: "1em",
    fontSize:"0.8em"
}

const inputStyle = {
    width: "8em"
}

  class RangeFacet extends Component {
      constructor(props){
          super(props)
        //   this.state = {
        //       minValue: this.props.minValue,
        //       maxValue: this.props.maxValue
        //   }
      }

      changeMin = (event) =>{
          this.props.onMinChange(event.target.value);
        //   this.setState({
        //       minValue: event.target.value
        //   })
      }
      changeMax = (event) =>{
          this.props.onMaxChange(event.target.value);
        //   this.setState({
        //       maxValue: event.target.value
        //   })
      }
    render() {
      return (
          <div style={rangeFacetStyle}>
              <label style={rangeFacetLabelStyle}>{this.props.title}</label>
              <div style={rangeBlock}>
                  <label style={{"display":"block", "textAlign":"left"}} className='range'>{this.props.minLabel}</label>
                  <input style={inputStyle} className='facet access' type='number' step={this.props.step} value={this.props.minValue}
                      onChange={this.changeMin} />
              </div>
              <div style={rangeBlock}>
                  <label style={{"display":"block", "textAlign":"left"}} className='range'>{this.props.maxLabel}</label>
                  <input style={inputStyle} className='facet access' type='number' step={this.props.step} value={this.props.maxValue}
                      onChange={this.changeMax} />
              </div>
          </div>
      );
    }
  }

  RangeFacet.propTypes = {
      title: PropTypes.string.isRequired,
      minLabel: PropTypes.string,
      maxLabel: PropTypes.string,
      minValue: PropTypes.string.isRequired,
      maxValue: PropTypes.string.isRequired,
      step: PropTypes.string
  }

  RangeFacet.defaultProps = {
      minLabel: 'Min',
      maxLabel: 'Max',
      step: '1'
  }


export default RangeFacet;
