import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
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
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'relative',
    marginTop: '77px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '300px',
    minHeight: '450px',
    border: '1px solid #ccc',
    padding: '10px',
    zIndex: 911,
  },
};

const contentLabel = 'Log In';

const mapStateToProps = state => ({
  state,
  style,
  contentLabel,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
