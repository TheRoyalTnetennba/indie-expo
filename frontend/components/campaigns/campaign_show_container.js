import { connect } from 'react-redux';
import { requestCampaign } from '../../actions/campaign_actions';
import CampaignShow from './campaign_show';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestCampaign: id => dispatch(requestCampaign(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignShow);
