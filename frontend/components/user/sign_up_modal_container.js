import { connect } from 'react-redux';
import { signup, guestLogin } from '../../actions/session_actions';
import SignUpModal from './sign_up_modal';
import { style } from './modal_style';

const contentLabel = 'Sign Up';

const mapStateToProps = state => ({
  state,
  style,
  contentLabel,
  modalInitial: false,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  guestLogin: () => dispatch(guestLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
