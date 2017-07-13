import React, { Component } from 'react';

  class Title extends Component {
      constructor(props){
          super(props);

          this.state = {
              isResetButtonVisible: false
          }
      }
    render() {
      return (
          <div className="title" style={{"textAlign": "center", "fontSize":"0.65em"}}>
              <h1>Mesa County Assessor - Property Sales Search</h1>
              <h2>Ken Brownlee, Assessor</h2>
              <div style={{"display":this.state.isResetButtonVisible?"block": "none"}} 
                  id="resetPage">Reset Search</div>
          </div>
      );
    }
  }


export default Title;
