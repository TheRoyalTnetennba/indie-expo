import React from 'react';
import { Link } from 'react-router-dom';

const SplashItem = (props) => {
  const photo = { backgroundImage: `url(${props.campaign.image_url})` };
  return (
    <div className="campaign-splash-item" style={photo}>
      <div className="splash-content-container">
        <div className="splash-content-text-container">
          <legend className="splash-title">{props.campaign.title}</legend>
          <legend className="splash-tagline">{props.campaign.tagline}</legend>
        </div>
        <Link className="splash-action" to={`/campaigns/${props.campaign.id}`}>Learn More</Link>
      </div>
    </div>
  );
};

export default SplashItem;

// <img src={props.campaign.image_url} className="splash-image" />
// const photo = { backgroundImage: `url(${props.campaign.image_url})` };
