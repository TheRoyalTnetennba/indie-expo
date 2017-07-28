import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestUser: user => dispatch(requestUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
