import React from 'react';
import Modal from 'react-modal';
import { style } from './modal_style';

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
      email: '',
      password: '',
    };
    this.style = style;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
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
    this.props.login(newState);
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.guestLogin();
  }

  instructions() {
    if (this.props.state.session.errors && this.props.state.session.errors.length > 0) {
      return (
        <ul className="session-errors">
          {this.props.state.session.errors.map((error, idx) => (
            <li key={`sessionerror${idx}`}>{error.split(' #')[0]}</li>
          ))}
          <p className="session-instructions">Or sign up with email</p>
        </ul>
      );
    }
    return (
      <ul className="session-errors">
        <p className="session-instructions">Or sign up with email</p>
      </ul>
    );
  }

  render() {
    return (
      <Modal
        style={style}
        contentLabel="Sign Up"
        isOpen={this.state.modalOpen}
        className="SessionForm"
        onRequestClose={this.closeModal}>
        <i className="fa fa-times close-button" aria-hidden="true" onClick={this.closeModal}></i>
        <button onClick={this.handleGuest} className="guest-login-button">Login As Guest User</button>
        {this.instructions()}
        <input type="email" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
        <input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
        <button className='login-button' onClick={this.handleSubmit}>LOG IN</button>
      </Modal>
    );
  }
}

export default AuthModal;
