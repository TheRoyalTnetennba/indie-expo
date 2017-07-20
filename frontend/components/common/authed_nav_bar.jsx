import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavUserDropdownContainer from '../user/nav_user_dropdown_container';

class AuthedNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.history.push('/ooiuoiu/');
  }


  render() {
    return (
      <header>
        <nav>
          <div><img alt="An homage to IndieGogo" src="assets/IndieLogo.png" /></div>
          <h2>Explore</h2>
          <h2>Search</h2>
          <h2 onClick={this.handleSubmit}>Start A Campaign</h2>
          <NavUserDropdownContainer />
        </nav>
      </header>
    );
  }
}

export default AuthedNavBar;
