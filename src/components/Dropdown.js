import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Dropdown.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as salesLookupActions from '../actions/salesLookupActions';

  class Dropdown extends Component {
      constructor(props){
          super(props);
          this.state = {
              display: false,
              listItems: props.option,
              baseClass: props.baseclass
          };
      }

componentDidMount = (x) =>{
    document.addEventListener('click', this.showHide, false);
}

componentWillUnmount = () =>{
   document.removeEventListener('click', this.showHide, false)
 }

selectNode = (node) =>{
    if (node.target.className !== 'heading') {
        Promise.resolve(this.props.handleChange[0](node.target.innerHTML))
        .then(() => this.props.actions.updateRecordCountButton(this.props.allState, this.props.recordCount, this.props.modalIsOpen));//getCount() from MoreFilters.js
    }
}

showHide = (event) =>{
    if (event.target.className.indexOf(this.state.baseClass) > -1) {
        this.setState({display: !this.state.display});
    } else if (event.target.className.indexOf(this.state.baseClass) <= -1 &&
        event.target.className !== "heading" &&
        this.state.display) {
        this.setState({display: false});
    }
}


    render() {
        //ulDisplay is outside of the ul style tag so it can be spread outside
        //along with the customStyles.dropNav object
        const ulDisplay = {
            "display":this.state.display? "block":"none"
        }
      return (
          <div style={{...this.props.customStyles.ulContainer}}
              className={`dropdown ${this.state.baseClass}`}>{this.props.value}
              <span className={`dropdown ${this.state.baseClass}`}>&#9660;</span>
              <ul style={{...ulDisplay, ...this.props.customStyles.dropNav}}
                  className='drop-nav display' onClick={this.selectNode}>
                  {this.state.listItems.map(item =>{
                      return <li key={item.value} className={item.type} >{item.value}</li>
                  })}
              </ul>
          </div>
      );
    }
  }

  Dropdown.propTypes = {
      value: PropTypes.string,
      option: PropTypes.array.isRequired,
      baseclass: PropTypes.string,
      customStyles: PropTypes.object.isRequired
  }

  Dropdown.defaultProps = {
      value: 'Select...',
      baseclass: 'base-class',
      customStyles: {dropdown:{},dropNav:{},ulContainer:{}}
  }


// export default Dropdown;



const mapStateToProps = (state, ownProps)=>{
    return {
        //Two other facets located in FacetsBar.js
        allState: state.facets,
        // propertyType: state.facets.propertyType,
        modalIsOpen: state.modalDisplay.modalIsOpen,
        // qualificationType: state.facets.qualificationType,
        // minSaleAmount: state.facets.minSaleAmount,
        // maxSaleAmount: state.facets.maxSaleAmount,
        // minAcreage: state.facets.minAcreage,
        // maxAcreage: state.facets.maxAcreage,
        // minSquareFeet: state.facets.minSquareFeet,
        // maxSquareFeet: state.facets.maxSquareFeet,
        // majorAreas: state.facets.majorAreas,
        // propertyUses: state.facets.propertyUses,
        // economicAreas: state.facets.economicAreas,
        // neighborhoods: state.facets.neighborhoods,
        // architecturalTypes: state.facets.architecturalTypes,
        // bufferDistance: state.facets.bufferDistance,
        // bufferAddress: state.facets.bufferAddress,
        recordCount: state.records.recordCount,
        // recordData: state.records.recordData
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        actions: bindActionCreators(salesLookupActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
