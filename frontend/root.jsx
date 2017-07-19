import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import LoginModal from './components/user/login_modal';
import NavBar from './components/nav_bar';

const Root = ({ store }) => (
      <Provider store={store}>
        <HashRouter>
          <NavBar />
        </HashRouter>
      </Provider>
);
export default Root;
