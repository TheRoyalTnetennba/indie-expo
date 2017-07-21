import React from 'react';

import AuthedNavBar from './authed_nav_bar';
import UnauthedNavBar from './unauthed_nav_bar';

export const NavBar = (props) => {
  if (props.state.session.currentUser && Object.keys(props.state.session.currentUser).length) {
    return (
      <AuthedNavBar />
    );
  }
  return (
    <UnauthedNavBar />
  );
}
