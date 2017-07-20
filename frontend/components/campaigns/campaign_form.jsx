import React from 'react';

class CampaignForm extends React.Component {
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

export default CampaignForm;
