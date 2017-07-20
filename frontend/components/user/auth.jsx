import React from 'react';

import LoginModalContainer from './login_modal_container';
import SignUpModalContainer from './sign_up_modal_container';
import NavUserDropdownContainer from './nav_user_dropdown_container';

class Auth extends React.Component {
  render() {
    if (this.props.state.session.currentUser && Object.keys(this.props.state.session.currentUser).length) {
      return (
        <NavUserDropdownContainer />
      );
    }
    return (
      <div className="nav-session-links">
        <SignUpModalContainer /><LoginModalContainer />
      </div>
    );
  }
}

export default Auth;
