import React from 'react';
import Modal from 'react-modal';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  openModal() {
    this.setState({ modalOpen: true })
  }

  render() {
    return(
      <div>
        <h2 onClick={this.openModal}>Sign Up</h2>
        <Modal
          isOpen={this.state.modalOpen}
          style={this.props.style}
          className="SessionModal"
          contentLabel={this.props.contentLabel}
          onRequestClose={this.closeModal}>
          <h2>Im a modal!</h2>
          <p>modal modal modal modal modal</p>
          <p>mooooooooodal!</p>

        </Modal>
      </div>

    );
  }
}

export default SignUpModal;
