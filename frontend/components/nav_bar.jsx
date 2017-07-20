import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginModalContainer from './user/login_modal_container';
// import SignUpModalContainer from './user/sign_up_modal_container';
import AuthContainer from './user/auth_container';

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div><img alt="An homage to IndieGogo" src="assets/IndieLogo.png" /></div>
          <h2>Explore</h2>
          <h2>Search</h2>
          <h2>Start A Campaign</h2>
          <AuthContainer />
        </nav>
      </header>
    );
  }
}

export default NavBar;
