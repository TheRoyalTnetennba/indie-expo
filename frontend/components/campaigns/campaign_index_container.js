import { connect } from 'react-redux';
import { login, guestLogin } from '../../actions/session_actions';
import CampaignIndex from './campaign_index';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  guestLogin: () => dispatch(guestLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignIndex);
