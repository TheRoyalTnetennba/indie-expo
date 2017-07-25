import React from 'react';
import { Link } from 'react-router-dom';
import LoginModalContainer from '../user/login_modal_container';
import SignUpModalContainer from '../user/sign_up_modal_container';

class UnauthedNavBar extends React.Component {
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
      <nav>
        <Link to="/"><img alt="An homage to IndieGogo" src="https://res.cloudinary.com/dy4gcvjff/image/upload/v1500915047/IndieLogo_i2eyvn.png" /></Link>
        <a>Explore</a>
        <div className="search">
          <i className="fa fa-search"></i>
          <input placeholder="Search" />
        </div>
        <Link to="/campaigns/new" className="start-campaign-nav-button">Start A Campaign</Link>
        <SignUpModalContainer />
        <LoginModalContainer />
      </nav>
    );
  }
}

export default UnauthedNavBar;
