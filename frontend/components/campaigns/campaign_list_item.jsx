import React from 'react';


const CampaignListItem = (props) => {
  const photo = { backgroundImage: `url(${props.campaign.image_url})` };
  const progress = props.campaign.progress >= 100 ? 100 : props.campaign.progress;
  return (
    <div className="campaign-index-item" href={`#/campaigns/${props.campaign.id}`} value={props.campaign.id}>
      <div className="campaign-index-photo" style={photo} />
      <legend className="index-category">{props.campaign.category}</legend>
      <p style={{fontWeight: 'bold', marginBottom: '0'}}>{props.campaign.title}</p>
      <p style={{paddingTop: '1px', marginTop: '1px'}}>{props.campaign.tagline}</p>
      <div className="progress-bar-outer">
        <div className="progress-bar-inner" style={{width: `${progress}%`}}></div>
      </div>
      <div className="above-progress-bar">${props.campaign.prettyFunds || props.campaign.pretty_funds}</div>
      <div className="below-progress-bar">
        <div>{progress}%</div>
        <div style={{textAlign: 'right'}}>{props.campaign.daysRemaining || props.campaign.days_left} days left</div>
      </div>
    </div>
  );
};
export default CampaignListItem;
