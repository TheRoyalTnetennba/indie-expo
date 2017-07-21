import React from 'react';
import { Link } from 'react-router-dom';
import NavUserDropdownContainer from '../user/nav_user_dropdown_container';
import { withRouter } from 'react-router';

class AuthedNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.startCampaign = this.startCampaign.bind(this);
  }

  startCampaign(e) {
    e.preventDefault();
    this.props.history.push('/campaigns/new');
  }

  render() {
    return (
      <header>
        <nav>
          <Link to="/"><img alt="An homage to IndieGogo" src={window.logoURL} /></Link>
          <a>Explore</a>
          <a>Search</a>
          <a onClick={this.startCampaign}>Start A Campaign</a>
          <NavUserDropdownContainer />
        </nav>
      </header>
    );
  }
}

export default withRouter(AuthedNavBar);
// <Link to="/campaigns/new">Start A Campaign</Link>
