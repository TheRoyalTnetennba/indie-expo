import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppContainer from './components/app_container';

const Root = ({ store }) => (
      <Provider store={store}>
        <HashRouter>
          <AppContainer store={store} />
        </HashRouter>
      </Provider>
);
export default Root;
