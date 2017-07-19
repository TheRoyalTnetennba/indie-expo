import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SignUpModal from './sign_up_modal';

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    zIndex: 10,
  },
  content: {
    position: 'fixed',
    top: '100px',
    left: '150px',
    right: '150px',
    bottom: '100px',
    border: '1px solid #ccc',
    padding: '20px',
    zIndex: 11,
  },
};

const contentLabel = 'Sign Up';

const mapStateToProps = state => ({
  state,
  style,
  contentLabel,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
