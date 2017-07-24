import { connect } from 'react-redux';
import { requestCampaigns } from '../../actions/campaign_actions';
import SplashSlider from './splash_slider';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  requestCampaigns: () => dispatch(requestCampaigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashSlider);
