import React, { Component } from 'react';
import PropTypes from 'prop-types';


const selectFacetStyle = {
    'display': 'block',
    'padding': '0.5em 0 2em 1.5em',
    'marginBottom':'1em',
    'top': '0',
    'height': '2.8em',
    'width': '90%'
}
const selectFacetLabelStyle = {
    display: 'block',
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: '#C4C4C4',
    margin: '0 0 0.4em 0',
    textAlign:'left',
    borderBottom: '1px solid #ccc'
}

const inputStyle = {
    'width': '100%',
    'fontSize': '0.7em'
}

  class SelectFacet extends Component {
      handleChange = (select) =>{
          this.props.onChange(select.target.options)
      }


    render() {
      return (
          <div style={{...selectFacetStyle, ...this.props.customStyles.component}}>
              <label style={selectFacetLabelStyle}>{this.props.title}</label>
              <select style={{...inputStyle, ...this.props.customStyles.select}} value={this.props.selected} onChange={this.handleChange} multiple>
                  {this.props.options.map(item =>{
                      return <option key={item.value} value={item.value} >{item.label}</option>
                  })}
              </select>
          </div>
      );
    }
  }

  SelectFacet.propTypes = {
      title: PropTypes.string.isRequired,
      options: PropTypes.array.isRequired,
      onChange: PropTypes.func.isRequired,
      selected: PropTypes.object.isRequired
  }

  SelectFacet.defaultProps = {
      customStyles: {component:{},select:{}}
  }

export default SelectFacet;
