import React, { Component } from 'react';
import RangeFacetLabel from './RangeFacetLabel';
import RangeBlock from './RangeBlock';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as salesLookupActions from '../actions/salesLookupActions';

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
      changeMin = (event) =>{
          Promise.resolve(this.props.onMinChange(event.target.value))
          .then(() => {
              this.props.propertyType !== 'Select Property Type'?
              this.props.actions.updateRecordCountButton(this.props.allState, this.props.recordCount, this.props.modalIsOpen):
              window.alert(`Please select a property type`)
          });
      }
      changeMax = (event) =>{
          Promise.resolve(this.props.onMaxChange(event.target.value))
          .then(() =>{
              this.props.propertyType !== 'Select Property Type'?
              this.props.actions.updateRecordCountButton(this.props.allState, this.props.recordCount, this.props.modalIsOpen):
              window.alert(`Please select a property type`)
          });
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
      modalIsOpen: PropTypes.bool.isRequired,
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

  const mapStateToProps = (state, ownProps)=>{
      return {
          allState: state.facets,
          propertyType: state.facets.propertyType,
          modalIsOpen: state.modalDisplay.modalIsOpen
      }
  }

  const mapDispatchToProps = (dispatch)=>{
      return {
          actions: bindActionCreators(salesLookupActions, dispatch)
      }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(RangeFacet);
