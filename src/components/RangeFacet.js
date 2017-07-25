import React, { Component } from 'react';
import RangeFacetLabel from './RangeFacetLabel';
import RangeBlock from './RangeBlock';
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

  class RangeFacet extends Component {
      constructor(props){
          super(props)
      }

      changeMin = (event) =>{
          this.props.onMinChange(event.target.value);
      }
      changeMax = (event) =>{
          this.props.onMaxChange(event.target.value);
      }

    render() {
      return (
          <div style={rangeFacetStyle}>

              <RangeFacetLabel value={this.props.title} />

              <RangeBlock
                  labelText={this.props.minLabel}
                  className="facet access"
                  type="number"
                  step={this.props.step}
                  rangeValue={this.props.minValue}
                  rangeChange={this.changeMin}
              />
              <RangeBlock
                  labelText={this.props.maxLabel}
                  className="facet access"
                  type="number"
                  step={this.props.step}
                  rangeValue={this.props.maxValue}
                  rangeChange={this.changeMax}
              />
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
