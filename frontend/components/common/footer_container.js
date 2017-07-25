import { connect } from 'react-redux';
import Footer from './sign_up_modal';
import { style } from './modal_style';

const contentLabel = 'Hire Me';

const mapStateToProps = state => ({
  state,
  style,
  contentLabel,
  modalInitial: false,
});

export default connect(mapStateToProps)(Footer);
