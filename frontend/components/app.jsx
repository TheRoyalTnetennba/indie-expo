import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import AuthedNavBar from './common/authed_nav_bar';
import UnauthedNavBar from './common/unauthed_nav_bar';

import CampaignFormContainer from './campaigns/campaign_form_container';
// import GreetingContainer from './greeting/greeting_container';
// import SessionFormContainer from './session_form/session_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getNavigation () {
    if (this.props.state.session.currentUser && Object.keys(this.props.state.session.currentUser).length) {
      return (
        <AuthedNavBar />
      );
    }
    return (
      <UnauthedNavBar />
    );
  }

  render() {
    return (
      <div>
        <header>
          {this.getNavigation()}
        </header>
        <Switch>
          <Route path="/campaigns/new" component={CampaignFormContainer} />
        </Switch>
      </div>
    );
  }
};

export default App;
// <Switch>
//   <AuthRoute path="/login" component={SessionFormContainer} />
//   <AuthRoute path="/signup" component={SessionFormContainer} />
//   <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
//   <Route path="/benches/:benchId" component={BenchShowContainer} />
//   <Route exact path="/" component={SearchContainer} />
// </Switch>
