import React from 'react';

const defaultstyle = {
    display: 'block',
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: '#C4C4C4',
    margin: '0 0 0.4em 0',
    textAlign:'left',
    borderBottom: '1px solid #ccc'
}

const RangeFacetLabel = (props) =>
  (
      <label style={{...defaultstyle, ...props.customStyles}}>{props.value}</label>
  );

  export default RangeFacetLabel;
