import React from 'react';


const CampaignIndexItem = (props) => {
  const photo = { backgroundImage: `url(${props.campaign.image_url})` };
  return (
    <div className="campaign-index-item">
      <div className="campaign-index-photo" style={photo} />
      <legend className="index-category">{props.campaign.category}</legend>
      <p>{props.campaign.title}</p>
      <p>{props.campaign.tagline}</p>
      <div className="progress-bar-outer">
        <div className="progress-bar-inner" style={{width: `${props.campaign.progress}%`}}></div>
      </div>
    </div>
  );
};
export default CampaignIndexItem;
