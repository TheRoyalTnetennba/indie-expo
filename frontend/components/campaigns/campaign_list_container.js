import { connect } from 'react-redux';
import { requestCampaigns } from '../../actions/campaign_actions';
import CampaignList from './campaign_list';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestCampaigns: () => dispatch(requestCampaigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignList);
