import { connect } from 'react-redux';
import { requestCampaigns } from '../../actions/campaign_actions';
import CampaignIndex from './campaign_index';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestCampaigns: () => dispatch(requestCampaigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignIndex);
