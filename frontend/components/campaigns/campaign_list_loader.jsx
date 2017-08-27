import React from 'react';
import { ClipLoader } from 'react-spinners';

const CampaignListLoader = (props) => {
  return (
    <div className="campaign-index-item" >
      <div className="campaign-index-loader">
        <ClipLoader
          color={'#eb1478'}
          loading={true}
        />
      </div>
      <div className="progress-bar-outer">
        <div className="progress-bar-inner" style={{width: `${50}%`}}></div>
      </div>
    </div>
  );
};
export default CampaignListLoader;
