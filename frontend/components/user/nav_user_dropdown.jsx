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
    this.handleProfile = this.handleProfile.bind(this);
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

  handleProfile(e) {
    e.preventDefault();
    this.closeModal();
    this.props.history.push(`/users/${this.props.state.session.currentUser.id}`);
  }

  render() {
    let dropdown;
    let nameStyle;
    if (this.state.modalOpen) {
      dropdown = { display: 'block' };
      nameStyle = { borderTop: '1px solid #a8a8a8',
        borderLeft: '1px solid #a8a8a8', borderRight: '1px solid #a8a8a8',
        padding: '12px 16px', minWidth: '160px', boxSizing: 'border-box'}
    } else {
      dropdown = { display: 'none' };
      nameStyle = { padding: '12px 16px', borderTop: '1px solid rgba(255, 255, 255, 0)',
        borderLeft: 'rgba(255, 255, 255, 0)', borderRight: 'rgba(255, 255, 255, 0)',
        minWidth: '160px', boxSizing: 'border-box'}
    }
    let dropDownClass;
    if (this.props.match.path === '/campaigns/new') {
      dropDownClass = 'dropdown-content-form';
    } else {
      dropDownClass = 'dropdown-content';
    }
    let name = this.props.state.session.currentUser.first_name;
    name = `${name} ${this.props.state.session.currentUser.last_name} `;
    const icon = this.state.modalOpen ? 'fa fa-angle-up' : 'fa fa-angle-down';
    return (
      <a onClick={this.openModal} className="dropdown" >{name}<i className={icon} aria-hidden="true"></i>
        <div style={dropdown} className={dropDownClass}>
          <div onClick={this.handleProfile}>Profile</div>
          <div onClick={this.handleSubmit}>Logout</div>
        </div>
        <Modal
          style={this.props.style}
          contentLabel={this.props.contentLabel}
          isOpen={this.state.modalOpen}
          className="user-nav-dropdown"
          onRequestClose={this.closeModal}>
        </Modal>
      </a>

    );
  }
}

export default withRouter(NavUserDropdown);
