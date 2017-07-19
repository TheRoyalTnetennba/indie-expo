import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Auth from './auth';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
