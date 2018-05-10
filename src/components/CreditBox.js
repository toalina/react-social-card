import React from 'react';

const CreditBox = props => (
  <div className="credit-box">
    <p className="credit-box-name">{props.name}</p>
    <img src={props.creditImageUrl} alt="person" className="credit-box-headshot"/>
  </div>
);

export default CreditBox;