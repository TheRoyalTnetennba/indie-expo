import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/root';
import configureStore from './frontend/store/store';
import Modal from 'react-modal';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-103955267-3');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} onUpdate={logPageView} />, root);
});
