import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ulStyle = {
       listStyle:"none",
       textAlign:"left",
       fontSize:"0.65em",
       cursor:"pointer",
       position:"fixed",
       padding:"0 1em 0.5em 0.5em",
       marginTop:"3.6em",
       zIndex:"1",
       maxHeight:"10em",
       overflow:"auto",
       background:"white"
}


  class Autocomplete extends Component {
      constructor(props){
          super(props);
          this.state = {
              returnList: [],
              visible: {visibility: 'hidden'},
          };
      }

changed = key =>{
    //On ul blur without selection clearList(). Only allow the list to
    //stay populated if user selects from ul list/
    this.props.updateStore(key.target.value);
    if(key.target.value.length > 3){
        axios.post(this.props.url,
            {'PARCELNO': key.target.value})
        .then(res =>{
            this.setState({
                returnList: res.data.map(opt =>{
                          return <li
                              key={opt['PARCELNUMBER']}>
                              {opt['Location']} ({opt['PARCELNUMBER']})
                          </li>
                      }),
                      visible: {visibility: 'visible'}
            });
          return
        });
    }
    return
}

completeInput = (list) =>{
    this.props.updateStore(list.target.innerText);
    this.setState({
        returnList:[],
        visible: {visibility: 'hidden'}
    });
    return
}


    render() {
      return (
          <div>
              <span style={{"fontSize":"0.7em", "float":"left"}}>{this.props.title}</span>
              <input value={this.props.completedItem} type='text' onChange={this.changed} className='bufferInput' style={{"fontSize":"0.7em", "width":"14em", "float":"left"}} />
              <div style={this.state.visible}><ul onClick={this.completeInput} style={ulStyle}>{this.state.returnList}</ul></div>
          </div>
      );
    }
  }

  Autocomplete.propTypes = {
      title: PropTypes.string,
      url: PropTypes.string.isRequired,
      completedItem: PropTypes.func.isRequired,
      updateStore: PropTypes.func.isRequired
  }

export default Autocomplete;
