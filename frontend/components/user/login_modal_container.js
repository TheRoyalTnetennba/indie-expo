import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, guestLogin } from '../../actions/session_actions';
import LoginModal from './login_modal';
import { style } from './modal_style';

const contentLabel = 'Log In';

const mapStateToProps = state => ({
  state,
  style,
  contentLabel,
  modalInitial: false,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  guestLogin: () => dispatch(guestLogin()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginModal));
