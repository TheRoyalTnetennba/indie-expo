import { connect } from 'react-redux';
import { requestCampaigns, searchCampaigns } from '../../actions/campaign_actions';
import CampaignList from './campaign_list';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestCampaigns: () => dispatch(requestCampaigns()),
  searchCampaigns: string => dispatch(searchCampaigns(string)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignList);
