import React from 'react';
import Modal from 'react-modal';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      email: '',
      password: '',
    };
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
    this.state = {
      modalOpen: false,
      email: 'gpaye8@gmail.com',
      password: 'test1234',
    };
    const newState = Object.assign({}, this.state);
    this.props.login(newState);
  }

  render() {
    return (
      <h2 onClick={this.openModal}>Log In
        <Modal
          style={this.props.style}
          contentLabel={this.props.contentLabel}
          isOpen={this.state.modalOpen}
          className="SessionForm"
          onRequestClose={this.closeModal}>
          <i className="fa fa-times close-button" aria-hidden="true" onClick={this.closeModal}></i>
          <button onClick={this.handleGuest} className="guest-login-button">Login As Guest User</button>
          <p>Or log in with email</p>
          <input type="email" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
          <button className='login-button' onClick={this.handleSubmit}>LOG IN</button>
        </Modal>
      </h2>
    );
  }
}

export default LoginModal;
