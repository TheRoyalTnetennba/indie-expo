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

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
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
          <button>Guest User</button>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

        </Modal>
      </div>

    );
  }
}

export default LoginModal;
