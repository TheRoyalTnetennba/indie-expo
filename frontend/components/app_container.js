import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import App from './app';

const mapStateToProps = state => ({
  state,
});

export default withRouter(connect(mapStateToProps)(App));
