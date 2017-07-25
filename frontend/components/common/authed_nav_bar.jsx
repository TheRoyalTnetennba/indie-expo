import React from 'react';
import { Link } from 'react-router-dom';
import NavUserDropdownContainer from '../user/nav_user_dropdown_container';
import { withRouter } from 'react-router';
import CampaignIndexContainer from '../campaigns/campaign_index_container';

class AuthedNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.startCampaign = this.startCampaign.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  startCampaign(e) {
    e.preventDefault();
    this.props.history.push('/campaigns/new');
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {

    }
  }

  render() {
    return (
      <nav>
        <Link to="/"><img alt="An homage to IndieGogo" src="https://res.cloudinary.com/dy4gcvjff/image/upload/v1500915047/IndieLogo_i2eyvn.png" /></Link>
        <a>Explore</a>
        <div className="search">
          <i className="fa fa-search"></i>
          <input placeholder="Search" />
        </div>
        <a onClick={this.startCampaign} className="start-campaign-nav-button">Start A Campaign</a>
        <NavUserDropdownContainer />
      </nav>
    );
  }
}

export default withRouter(AuthedNavBar);
// <Link to="/campaigns/new">Start A Campaign</Link>
