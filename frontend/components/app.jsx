import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import { ProtectedRoute, AuthRoute } from '../utils/auth';

import CampaignFormContainer from './campaigns/campaign_form_container';
import CampaignIndexContainer from './campaigns/campaign_index_container';
import AuthModalContainer from './user/auth_modal_container';
import CampaignShowContainer from './campaigns/campaign_show_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={CampaignIndexContainer} />
        <ProtectedRoute path="/campaigns/new" component={CampaignFormContainer} />
        <ProtectedRoute path="/campaigns/:campaignID" component={CampaignShowContainer} />
        <Route path="/session" component={AuthModalContainer} />
      </Switch>
    );
  }
}


export default App;
// <Switch>
//   <AuthRoute path="/login" component={SessionFormContainer} />
//   <AuthRoute path="/signup" component={SessionFormContainer} />
//   <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
//   <Route path="/benches/:benchId" component={BenchShowContainer} />
//   <Route exact path="/" component={SearchContainer} />
// </Switch>
