import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavUserDropdown from './nav_user_dropdown';

const style = {
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    zIndex: 0,
    borderWidth: 0,
  },
  content: {
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    position: 'relative',
    marginTop: '80px',
    marginLeft: 'auto',
    marginRight: '8%',
    width: '150px',
    // minHeight: '450px',
    border: '17px solid #f5f5f5',
    padding: '10px',
    zIndex: 911,
  },
};

const contentLabel = 'User Menu';

const mapStateToProps = state => ({
  state,
  style,
  contentLabel,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavUserDropdown);
