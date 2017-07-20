import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginModalContainer from '../user/login_modal_container';
import SignUpModalContainer from '../user/sign_up_modal_container';

class UnauthedNavBar extends React.Component {
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
          <div><img alt="An homage to IndieGogo" src={window.logoURL} /></div>
          <h2>Explore</h2>
          <h2>Search</h2>
          <h2 onClick={this.handleSubmit}>Start A Campaign</h2>
          <SignUpModalContainer />
          <LoginModalContainer />
        </nav>
      </header>
    );
  }
}

export default UnauthedNavBar;
