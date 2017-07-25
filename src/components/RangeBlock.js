import React from 'react';

const rangeBlockStyle = {
    position: "relative",
    float: "left",
    lineHeight: "1.1em",
    paddingRight: "1em",
    fontSize:"0.8em"
}

const RangeBlock = (props) =>

  (
      <div style={rangeBlockStyle}>
          <label
              style={{"display":"block", "textAlign":"left"}}
          >
              {props.labelText}
          </label>
          <input
              style={{"width":"8em"}}
              className={props.className}
              type={props.type}
              step={props.step}
              value={props.rangeValue}
              onChange={i => {props.rangeChange(i)}}
          />
      </div>
  );

  export default RangeBlock;
