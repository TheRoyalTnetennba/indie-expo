import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { ProtectedRoute } from '../utils/auth';
import { withRouter } from 'react-router';

import CampaignFormContainer from './campaigns/campaign_form_container';
import CampaignIndexContainer from './campaigns/campaign_index_container';
import AuthModalContainer from './user/auth_modal_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <ProtectedRoute path="/campaigns/new" component={CampaignFormContainer} />
        <Route path="/" exact component={CampaignIndexContainer} />
      </Switch>
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
