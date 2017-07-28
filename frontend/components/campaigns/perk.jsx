import React from 'react';

const Perk = (props) => {
  return (
    <div className="perk-card">
      <div className="perk-price">${props.price}</div>
      <div className="perk-title">{props.title}</div>
      <div className="perk-description">{props.description}</div>
      <div className="perk-get">get this perk</div>
    </div>
  );
}

export default Perk;
