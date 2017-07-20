import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import NavBar from './components/nav_bar';

const Root = ({ store }) => (
      <Provider store={store}>
        <HashRouter>
          <NavBar store={store} />
        </HashRouter>
      </Provider>
);
export default Root;
