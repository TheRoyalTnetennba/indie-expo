import React from 'react';

const CampaignIndexItem = (props) => {
  return (
    <div className="campaign-index-item">
      <img src={props.campaign.image_url} alt={props.campaign.tagline} />
      <legend className="index-category">{props.campaign.category}</legend>
      <p>{props.campaign.title}</p>
      <div className="progress-bar-outer">
        <div className="progress-bar-inner"> </div>
      </div>
    </div>
  );
};
export default CampaignIndexItem;
