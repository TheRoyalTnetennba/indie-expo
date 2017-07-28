import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestCampaign, newContribution } from '../../actions/campaign_actions';
import CampaignShow from './campaign_show';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestCampaign: id => dispatch(requestCampaign(id)),
  newContribution: contribution => dispatch(newContribution(contribution)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampaignShow));
