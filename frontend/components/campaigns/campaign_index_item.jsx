import React from 'react';


const CampaignIndexItem = (props) => {
  const photo = { backgroundImage: `url(${props.campaign.image_url ? props.campaign.image_url : 'https://res.cloudinary.com/dy4gcvjff/image/upload/q_auto:eco/v1500921122/pexels-photo-64658_z3e820.jpg'})` };
  const progress = props.campaign.progress >= 100 ? 100 : props.campaign.progress;
  return (
    <div className="campaign-index-item" value={props.campaign.id}>
      <div className="campaign-index-photo" style={photo}></div>
      <legend className="index-category">{props.campaign.category}</legend>
      <p style={{fontWeight: 'bold', marginBottom: '0'}}>{props.campaign.title}</p>
      <p style={{paddingTop: '1px', marginTop: '1px'}}>{props.campaign.tagline}</p>
      <div className="progress-bar-outer">
        <div className="progress-bar-inner" style={{width: `${progress}%`}}></div>
      </div>
      <div className="above-progress-bar">${props.campaign.prettyFunds}</div>
      <div className="below-progress-bar">
        <div>{progress}%</div>
        <div style={{textAlign: 'right'}}>{props.campaign.daysRemaining} days left</div>
      </div>
    </div>
  );
};
export default CampaignIndexItem;
