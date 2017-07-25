import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import PropTypes from 'prop-types';
import RangeFacetLabel from './RangeFacetLabel';
import RangeFacet from './RangeFacet';
import SelectFacet from './SelectFacet';
import BufferFacet from './BufferFacet/BufferFacet';
import Dropdown from './Dropdown';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as salesLookupActions from '../actions/salesLookupActions';


const filterStyles = {
    display: 'inline-block',
    position:'absolute',
    marginTop: '1.35em',
    cursor:'pointer',
    fontWeight: 'bold',
    fontSize: '0.8em'
}

const arrowSpanStyles = {
    marginLeft:"1em",
    float:"right",
    fontSize:"0.8em",
    marginTop: "0.1em"
}

const buttonGroupStyle = {
    textAlign:'right'
}

const buttonStyle = {
    padding:"0.75em",
    borderRadius:"4px",
    cursor: "pointer",
    border:"none",
    margin:"0.25em"
}

const leftColumn = {
    verticalAlign: 'top',
    marginTop:'1.4em'
}

const rightColumn = {
    verticalAlign: 'top',
    marginTop:'0.5em'
}

const column = {
    display:'inline-block',
    width: '18em'
}

const modalStyle = {
    overlay:{
        top: 247,
        left: '0',
        right: '0'
    },
    content:{
        textAlign: 'center',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        padding:'none',
        borderTop: 'none'
    }
}

const majorAreaStyle = {
    component:{
        display:'inline-block',
        marginRight:'0.8em',
        'paddingTop':'1em',
        'paddingLeft':'1.1em',
        'width':'38%'
    },
    select: {}
}

const detailedUseStyle = {
    component:{
        'display':'inline-block',
        'padding':'1em 0 0 0',
        'width':'47.3%'
    }
}

const buildingTypeStyle = {
    select: {
        'height':'13.5em'
    },
    component:{
        'display':'inline-block'
    }
}

const neighborhoodStyle = {
    select: {
        'height':'13.5em'
    }
}

const economicArea = [
    {value: "Any", label: "Any"},
    {value: "Clifton / D 1/2 Rd Area", label: "Clifton / D 1/2 Rd Area"},
    {value: "Commercial", label: "Commercial"},
    {value: "Downtown", label: "Downtown"},
    {value: "East Of 28 Rd / NE Grand Jct", label: "East Of 28 Rd / NE Grand Jct"},
    {value: "Fruita / East 18 to 22 Rd", label: "Fruita / East 18 to 22 Rd"},
    {value: "Fruitvale Area", label: "Fruitvale Area"},
    {value: "GJ North Area", label: "GJ North Area"},
    {value: "N/A", label: "N/A"},
    {value: "Orchard Mesa", label: "Orchard Mesa"},
    {value: "Outlying", label: "Outlying"},
    {value: "Palisade/East Orchard Mesa", label: "Palisade/East Orchard Mesa"},
    {value: "Redlands", label: "Redlands"}
]

const majorArea = [
    {value: "Any", label: "Any"},
    {value: "GrandJunction", label: "Grand Junction"},
    {value: "Palisade", label: "Palisade"},
    {value: "FruitaLoma", label: "Fruita/Loma"},
    {value: "OutlyingAreas", label: "Outlying Areas"},
    {value: "Unknown", label: "Unknown"}
]

const detailedUse = [
    {value: "Any", label: "Any"},
    {value: "4000", label: "Agricultural"},
    {value: "2000", label: "Commercial"},
    {value: "1004", label: "Condo"},
    {value: "1001", label: "Duplex/Triplex"},
    {value: "1000", label: "Residential"},
    {value: "1003", label: "Townhouse"},
    {value: "1002", label: "Multi-Fam 4-8"},
    {value: "1005", label: "Multi 9 - up"},
    {value: "3000", label: "Industrial"},
    {value: "9000", label: "Exempt"},
    {value: "7000", label: "Oil & Gas"}
]

const qualificationContent = [
     {type: 'item', value: 'Qualified', label: 'Qualified' },
     {type: 'item', value: 'Unqualified', label: 'Unqualified' },
     {type: 'item', value: 'Qualified and Unqualified', label: 'Qualified and Unqualified' },
]

const qualificationStyle = {
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5em',
    marginBottom: '1em',
    top: '0',
    height: '2.8em',
    width: '75%',
    boxShadow: '1px 1px 5px #888888'
}

const customStyles = {
    dropNav: {
        "width":"15.5em",
        "marginLeft":"-0.7em",
        "marginTop":"0.9em"
    },
    ulContainer: {
        "width":"14.5em",
        "paddingLeft":"0 !important"
    }
}

    class MoreFilters extends Component {
        constructor(props){
            super(props);
            this.state = {
                modalIsOpen: false,
                // count: "0",
                neighborhoodOptions: undefined,
                archTypeOptions: undefined
            }
        }

    componentWillMount = () => {
        const fetchData = (method, stateKey, field) =>{
            axios.post(`http://localhost:3000/${method}`).then(res => {
            this.setState({
                [stateKey]: [{value: "Any", label: "Any"}].concat(res.data.map(opt => {
                    return {value: opt[field], label: opt[field]}
                }))
            })
            return
        })
    };
    fetchData('query/retrieve/neighborhood', 'neighborhoodOptions', 'NBHD_DESC');
    fetchData('query/retrieve/building', 'archTypeOptions', 'type');
    }

    toggleModal = () => {
        this.props.actions.toggleModal(!this.props.modalIsOpen)
    }

    getCount = ()=>{
        //data will be replaced by a prop showing object from state
        const data = {
            ACCOUNTNO: 'R05552'
        }
        this.props.actions.updateRecordCountButton(data)
    }

      render() {
        return (
          <div style={filterStyles} onClick={this.toggleModal}>
              {this.props.message}<span style={arrowSpanStyles}>&#9660;</span>
              <Modal
                  style={modalStyle}
                  isOpen={this.props.modalIsOpen}
                  onRequestClose={this.toggleModal}
                  shouldCloseOnOverlayClick={true}
                  contentLabel="MCModal"
              >


                  <div style={{...column, ...leftColumn}} className="leftColumn">

                      <div style={qualificationStyle} className="qualification">
                          <RangeFacetLabel value="Sales Qualification Type" />
                          <Dropdown
                              baseclass='qualification'
                              customStyles={customStyles}
                              option={qualificationContent}
                              placeholder='Qualified and Unqualified'
                              value={this.props.qualificationType}
                              handleChange={this.props.actions.updateSalesQualification}
                          />
                      </div>

                      <RangeFacet
                          title='Sale Amount'
                          minLabel='Min Sale Amount'
                          maxLabel='Max Sale Amount'
                          minValue={this.props.minSaleAmount}
                          maxValue={this.props.maxSaleAmount}
                          onMinChange={this.props.actions.updateMinSaleAmount}
                          onMaxChange={this.props.actions.updateMaxSaleAmount}
                          step='10000'
                      />

                      <RangeFacet
                          title='Acreage'
                          minLabel='Min Acreage'
                          maxLabel='Max Acreage'
                          minValue={this.props.minAcreage}
                          maxValue={this.props.maxAcreage}
                          onMinChange={this.props.actions.updateMinAcreage}
                          onMaxChange={this.props.actions.updateMaxAcreage}
                          step='0.1'
                      />

                      <RangeFacet
                          title='Total heated Square Feet'
                          minLabel='Min Square Feet'
                          maxLabel='Max Square Feet'
                          minValue={this.props.minSquareFeet}
                          maxValue={this.props.maxSquareFeet}
                          onMinChange={this.props.actions.updateMinSquareFeet}
                          onMaxChange={this.props.actions.updateMaxSquareFeet}
                          step='100'
                      />
                  </div>


                  <div style={column} className="centerColumn">
                      <SelectFacet
                          title='Major Area'
                          options={majorArea}
                          defaultOption='Any'
                          selected={this.props.majorAreas}
                          customStyles={majorAreaStyle}
                          onChange={this.props.actions.updateMajorArea}
                      />

                      <SelectFacet
                          title='Property Use'
                          options={detailedUse}
                          defaultOption='Any'
                          selected={this.props.propertyUses}
                          customStyles={detailedUseStyle}
                          onChange={this.props.actions.updatePropertyUse}
                      />

                      <SelectFacet
                          title='Economic Area'
                          options={economicArea}
                          defaultOption='Any'
                          selected={this.props.economicAreas}
                          onChange={this.props.actions.updateEconomicArea}
                      />

                      <SelectFacet
                          title='Neighborhood/Subdivision'
                          options={this.state.neighborhoodOptions}
                          defaultOption='Any'
                          customStyles={neighborhoodStyle}
                          selected={this.props.neighborhoods}
                          onChange={this.props.actions.updateNeighborhood}
                      />
                  </div>

                  <div style={{...column, ...rightColumn}} className="rightColumn">

                      <SelectFacet
                          title='Building Architectural Type'
                          options={this.state.archTypeOptions}
                          defaultOption='Any'
                          customStyles={buildingTypeStyle}
                          selected={this.props.architecturalTypes}
                          onChange={this.props.actions.updateArchitecturalType}
                      />

                      <BufferFacet
                          distance={this.props.bufferDistance}
                          address={this.props.bufferAddress}
                          updateDistance={this.props.actions.updateBufferDistance}
                          updateAddress={this.props.actions.updateBufferAddress}
                      />


                      <div style={buttonGroupStyle} className='buttonGroup'>
                          <button style={buttonStyle} onClick={this.getCount}>View {this.props.recordCount} records</button>
                          <button style={buttonStyle} onClick={this.toggleModal}>Cancel</button>
                      </div>
                  </div>

              </Modal>
          </div>
        );
      }
    }

    MoreFilters.propTypes = {
        modalIsOpen: PropTypes.bool.isRequired,
        recordCount: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired
    }


    const mapStateToProps = (state, ownProps)=>{
        return {
            //Two other facets located in FacetsBar.js
            modalIsOpen: state.modalDisplay.modalIsOpen,
            qualificationType: state.facets.qualificationType,
            minSaleAmount: state.facets.minSaleAmount,
            maxSaleAmount: state.facets.maxSaleAmount,
            minAcreage: state.facets.minAcreage,
            maxAcreage: state.facets.maxAcreage,
            minSquareFeet: state.facets.minSquareFeet,
            maxSquareFeet: state.facets.maxSquareFeet,
            majorAreas: state.facets.majorAreas,
            propertyUses: state.facets.propertyUses,
            economicAreas: state.facets.economicAreas,
            neighborhoods: state.facets.neighborhoods,
            architecturalTypes: state.facets.architecturalTypes,
            bufferDistance: state.facets.bufferDistance,
            bufferAddress: state.facets.bufferAddress,
            recordCount: state.records.recordCount
        }
    }

    const mapDispatchToProps = (dispatch)=>{
        return {
            actions: bindActionCreators(salesLookupActions, dispatch)
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(MoreFilters);
