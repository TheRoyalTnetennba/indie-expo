import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import LoginModalContainer from '../user/login_modal_container';
import SignUpModalContainer from '../user/sign_up_modal_container';

class UnauthedNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.startCampaign = this.startCampaign.bind(this);
    this.state = {
      search: '',
    }
    this.update = this.update.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  startCampaign(e) {
    e.preventDefault();
    this.props.history.push('/campaigns/new');
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      this.props.history.push(`/search/${this.state.search}`);
      this.forceUpdate();
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }


  render() {
    return (
      <nav>
        <Link to="/"><img alt="An homage to IndieGogo" src="https://res.cloudinary.com/dy4gcvjff/image/upload/v1500915047/IndieLogo_i2eyvn.png" /></Link>
        <Link to="/campaigns">Explore</Link>
        <div className="search">
          <i className="fa fa-search"></i>
          <input onChange={this.update('search')}  onKeyPress={this.handleKeyPress} value={this.state.search} placeholder="Search" />
        </div>
        <Link to="/campaigns/new" className="start-campaign-nav-button">Start A Campaign</Link>
        <SignUpModalContainer />
        <LoginModalContainer />
      </nav>
    );
  }
}

export default withRouter(UnauthedNavBar);
