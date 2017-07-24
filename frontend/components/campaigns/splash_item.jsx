import React from 'react';

const SplashItem = (props) => {
  return (
    <div className="campaign-splash-item">
      <img src={props.campaign.image_url} className="splash-image" alt={props.campaign.tagline} />
      <legend className="splash-category">{props.campaign.tagline}</legend>
      <p>{props.campaign.title}</p>
      <div className="progress-bar-outer">
        <div className="progress-bar-inner"> </div>
      </div>
    </div>
  );
}
export default SplashItem;
