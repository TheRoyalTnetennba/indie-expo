import React from 'react';
import { MoonLoader } from 'react-spinners';

const SplashLoader = (props) => {
  return (
    <div className="campaign-splash-item">
      <div className="splash-content-container">
        <div className="splash-loader">
          <MoonLoader
            color={'#eb1478'}
            loading={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashLoader;
