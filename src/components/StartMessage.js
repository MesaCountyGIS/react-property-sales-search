import React, { Component } from 'react';
import LoadingSpinner from './LoadingSpinner';

const startMessageStyles = {
    display:"none",
    padding: "3em",
    textAlign: "center",
    border: "1px solid gray",
    margin: "2em auto",
    borderRadius: "7px",
    boxShadow: "1px 1px 5px #888888"
}

  class StartMessage extends Component {

    render() {
      return (
          <div style={startMessageStyles} className="startMessage">
              <LoadingSpinner />
              <span>Select a <b>Property Type</b> above to begin.
                  <br />
                  You can also click <b>More Filters</b> for more detailed options.</span>
          </div>
      );
    }
  }


export default StartMessage;
