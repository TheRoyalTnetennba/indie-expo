import React from 'react';

import LoginModalContainer from './login_modal_container';
import SignUpModalContainer from './sign_up_modal_container';

class Auth extends React.Component {
  render() {
    console.log(this.props);
    let content;
    if (this.props.state.session.currentUser) {
      content = 'logged_in';
    } else {
      'not_logged_in';
    }
    return (
      <h1>
        { content }
      </h1>
    );
  }
}

export default Auth;
