import { connect } from 'react-redux';
import { login, guestLogin } from '../../actions/session_actions';
import { requestCategories } from '../../actions/category_actions';
import { newCampaign } from '../../actions/campaign_actions';
import CampaignForm from './campaign_form';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  guestLogin: () => dispatch(guestLogin()),
  requestCategories: () => dispatch(requestCategories()),
  newCampaign: campaign => dispatch(newCampaign(campaign)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignForm);
