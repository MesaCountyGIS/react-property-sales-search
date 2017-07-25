import React from 'react';
import PropTypes from 'prop-types';

const ClearButton = props => (
  <button
      onClick={props.clearFunction} style={{
          "float": "left",
          "marginLeft": "1em",
          "marginTop": "-0.1em"
      }}
      title='Clear the list'
  >
      Clear
  </button>
);

  ClearButton.propTypes = {
      clearFunction: PropTypes.func.isRequired
  }

export default ClearButton;
