import { connect } from 'react-redux';
import { signup, guestLogin } from '../../actions/session_actions';
import AuthModal from './auth_modal';
import { style } from './modal_style';

const contentLabel = 'Log In';

const mapStateToProps = state => ({
  state,
  style,
  contentLabel,
  modalInitial: true,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  guestLogin: () => dispatch(guestLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
