import React from 'react';
import Modal from 'react-modal';
import { style } from '../user/modal_style';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      email: '',
      password: '',
    };
    this.style = style;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
  }

  render() {
    return (
      <footer>
        <div className="footer-section">
          <div className="footer-subsection">
            <h1>Campaigning</h1>
            <a onClick={this.openModal}>Start Your Campaign</a>
            <a onClick={this.openModal}>InDemand</a>
            <a onClick={this.openModal}>Equity</a>
            <a onClick={this.openModal}>Enterprise</a>
            <a onClick={this.openModal}>Generosity</a>
            <a onClick={this.openModal}>Success Stories</a>
            <a onClick={this.openModal}>Pricing</a>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-subsection">
            <h1>Contributing</h1>
            <a onClick={this.openModal}>Explore</a>
            <a onClick={this.openModal}>Collections</a>
            <a onClick={this.openModal}>Parner Pages</a>
            <a onClick={this.openModal}>Equity</a>
          </div>
        </div>
        <Modal
          style={style}
          contentLabel="Sign Up"
          isOpen={this.state.modalOpen}
          className="SessionForm"
          onRequestClose={this.closeModal}>
          <i className="fa fa-times close-button" aria-hidden="true" onClick={this.closeModal}></i>
          <button onClick={console.log('hello')} className="guest-login-button">Schedule Interview</button>
          <p>Please Hire me i am desperate and soon-to-be homeless</p>
        </Modal>
      </footer>
    );
  }
}

export default Footer;
