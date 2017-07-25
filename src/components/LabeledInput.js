import React from 'react';
import PropTypes from 'prop-types';

const LabeledInput = props => (
    <div style={{"fontSize":"0.7em"}}>
        <label
            style={{"float":"left", "fontSize":"0.9em", "marginTop":"0.5em"}}
        >
            {props.labelBefore}
        </label>
        <input
            style={{"fontSize":"0.9em", "width":"4em", "float":"left", "marginLeft":"1em", "marginTop":"0.3em"}}
            value={props.valueFromState}
            type={props.type}
            min={props.min}
            step={props.step}
            name={props.name}
            className={props.className}
            onChange={props.updateState}
        />
        <span
            style={{"marginTop":"0.5em", "float":"left", "marginLeft":"1em", "marginTop":"0.3em"}}
        >
            {props.labelAfter}
        </span>
    </div>
);

  LabeledInput.propTypes = {
      updateState: PropTypes.func,
      labelBefore: PropTypes.string,
      labelAfter: PropTypes.string,
      valueFromState: PropTypes.string,
      type: PropTypes.string,
      min: PropTypes.string,
      step: PropTypes.string,
      name: PropTypes.string,
      className: PropTypes.string,
  }

export default LabeledInput;
