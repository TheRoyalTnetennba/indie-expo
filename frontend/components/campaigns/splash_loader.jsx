import React from 'react';
import { Link } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

const SplashLoader = (props) => {
  const photo = { backgroundImage: 'url(https://res.cloudinary.com/dy4gcvjff/image/upload/v1503679122/ajax-loader_dqrqwu.gif)' };
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
