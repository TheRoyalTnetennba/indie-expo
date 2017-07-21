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
      <header>
        <nav>
          <Link to="/"><img alt="An homage to IndieGogo" src={window.logoURL} /></Link>
          <a>Explore</a>
          <a>Search</a>
          <Link to="/campaigns/new">Start A Campaign</Link>
          <SignUpModalContainer />
          <LoginModalContainer />
        </nav>
      </header>
    );
  }
}

export default UnauthedNavBar;
