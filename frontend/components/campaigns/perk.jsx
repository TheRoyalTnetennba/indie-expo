import React from 'react';

const Perk = (props) => {
  const amount = props.price;
  return (
    <div className="perk-card">
      <div className="perk-price">${props.price}</div>
      <div className="perk-title">{props.title}</div>
      <div className="perk-description">{props.description}</div>
      <div onClick={() => props.updateParent(amount)} className="perk-get">get this perk</div>
    </div>
  );
}

export default Perk;
