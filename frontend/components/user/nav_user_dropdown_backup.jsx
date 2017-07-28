import React from 'react';
import Modal from 'react-modal';
import { Link, Redirect, withRouter } from 'react-router-dom';

class NavUserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(this.props.history.push("/"));
  }

  render() {
    let name = this.props.state.session.currentUser.first_name;
    name = `${name} ${this.props.state.session.currentUser.last_name} `;
    const icon = this.state.modalOpen ? 'fa fa-angle-up' : 'fa fa-angle-down';
    return (
      <a onClick={this.openModal}>{name}<i className={icon} aria-hidden="true"></i>
        <Modal
          style={this.props.style}
          contentLabel={this.props.contentLabel}
          isOpen={this.state.modalOpen}
          className="user-nav-dropdown"
          onRequestClose={this.closeModal}>
          <a>My Campaigns</a>
          <a>My Contributions</a>
          <a>My Profile</a>
          <a>My Settings</a>
          <a onClick={this.handleSubmit}>Logout</a>
        </Modal>
      </a>

    );
  }
}

export default withRouter(NavUserDropdown);
