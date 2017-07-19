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

  render() {
    return (
      <div>
        <h2 onClick={this.openModal}>Log In</h2>
        <Modal
          style={this.props.style}
          contentLabel={this.props.contentLabel}
          isOpen={this.state.modalOpen}
          className="SessionForm"
          onRequestClose={this.closeModal}>
          <i className="fa fa-times" aria-hidden="true" onClick={this.closeModal}></i>
          <button>Guest User</button>
          <p>Or log in with email</p>
          <input type="email" placeholder="email" value={this.state.email} onChange={this.update('email')} />
          <input type="password" placeholder="password" value={this.state.password} onChange={this.update('password')} />
          <button onClick={this.handleSubmit}>LOG IN</button>
        </Modal>
      </div>

    );
  }
}

export default LoginModal;
