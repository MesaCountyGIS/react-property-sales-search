import React, { Component } from 'react';
import axios from 'axios';
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
const bufferFacetLabelStyle = {
    display: 'block',
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: '#C4C4C4',
    margin: '0 0 0.4em 0',
    textAlign:'left',
    borderBottom: '1px solid #ccc'
}

const inputStyle = {
    width: "8em"
}

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

  class BufferFacet extends Component {
      constructor(props){
          super(props)
          this.state = {
              address: "",
              addressList: [],
              visible: {visibility: 'hidden'},
              distance: 0
          }
      }

      componentDidMount(){
          Array.from(document.querySelectorAll('.facet')).forEach(el =>{
              el.addEventListener("click", ()=>{
                  setTimeout(()=>{
                    //   console.log(this.state.distance)
                  })
              })
          })
      }

      componentWillUnmount(){
          Array.from(document.querySelectorAll('.facet')).forEach(el =>{
              el.removeEventListener("click", ()=>{
                //   console.log(this.state.distance)
              })
          })
      }

      changed = key =>{
          this.setState({address:key.target.value});
          if(key.target.value.length > 3){
              axios.post('http://localhost:3000/query/retrieve/address',
                  {'PARCELNO': key.target.value})
              .then(res =>{
                  this.setState({
                      addressList: res.data.map(opt =>{
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

      clearList = () =>{
          this.setState({
              address: "",
              addressList:[],
              visible: {visibility: 'hidden'},
              distance: 0
          });
          return
      }

      populateAddress = (address) =>{
          this.setState({
              address: address.target.innerText,
              addressList:[],
              visible: {visibility: 'hidden'}
          });
          return
      }

    render() {
      return (
          <div style={bufferFacetStyle}>
              <label style={bufferFacetLabelStyle}>Buffer</label>
              <div>
                  <span style={{"fontSize":"0.7em", "float":"left"}}>Enter Address or Parcel No.</span>

                  <input value={this.state.address} type='text' onChange={this.changed} className='bufferInput' style={{"fontSize":"0.7em", "width":"14em", "float":"left"}} title='Enter Parcel Number or Address' />
                  <div style={this.state.visible}><ul onClick={this.populateAddress} style={ulStyle}>{this.state.addressList}</ul></div>
                  <button onClick={this.clearList} style={{"float":"left", "marginLeft":"1em", "marginTop":"-0.1em"}} title='Clear the list'>Clear</button>

                  <div style={{"fontSize":"0.7em"}} id='bufferdiv'>
                      <label style={{"float":"left", "fontSize":"0.9em", "marginTop":"0.5em"}} for='buffer'>Buffer above entry</label>

                      <input style={{"fontSize":"0.9em", "width":"4em", "float":"left", "marginLeft":"1em", "marginTop":"0.3em"}}
                          value={this.state.distance} type='number' min='0' step='.25' name='buffer' className='facet milesBuffer'
                          onChange={i=>{this.setState({distance:i.target.value});return}}/>

                      <span style={{"marginTop":"0.5em", "float":"left", "marginLeft":"1em", "marginTop":"0.3em"}}>miles</span>
                  </div>
              </div>
                  </div>
      );
    }
  }

export default BufferFacet;
