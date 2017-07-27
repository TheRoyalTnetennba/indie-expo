import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestCampaign } from '../../actions/campaign_actions';
import CampaignShow from './campaign_show';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestCampaign: id => dispatch(requestCampaign(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampaignShow));
