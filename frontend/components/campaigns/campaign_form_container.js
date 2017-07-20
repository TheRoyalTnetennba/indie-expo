import { connect } from 'react-redux';
import { login, guestLogin } from '../../actions/session_actions';
import CampaignForm from './campaign_form';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  guestLogin: () => dispatch(guestLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignForm);
