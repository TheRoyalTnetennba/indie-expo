import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestCampaigns } from '../../actions/campaign_actions';
import { searchCampaigns } from '../../actions/search_actions';
import CampaignList from './campaign_list';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestCampaigns: () => dispatch(requestCampaigns()),
  searchCampaigns: string => dispatch(searchCampaigns(string)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampaignList));
