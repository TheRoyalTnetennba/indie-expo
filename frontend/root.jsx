import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <h1>No</h1>
        </HashRouter>
      </Provider>
    );
  }
}
export default Root;
