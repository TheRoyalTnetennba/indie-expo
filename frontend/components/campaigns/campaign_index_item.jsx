import React from 'react';

const CampaignIndexItem = (props) => {
  console.log(props.campaign);
  return (
    <div className="campaign-index-item">
      <h1>{props.campaign.title}</h1>
    </div>
  );
}
export default CampaignIndexItem;
