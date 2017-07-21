import React from 'react';
import Modal from 'react-modal';
import { Link, Redirect } from 'react-router-dom';

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
    this.props.logout();

  }

  render() {
    let name = this.props.state.session.currentUser.first_name;
    name = `${name} ${this.props.state.session.currentUser.last_name} `;
    const icon = this.state.modalOpen ? 'fa fa-angle-up' : 'fa fa-angle-down';
    console.log(this.props);
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

export default NavUserDropdown;


// <script>
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
// </script>
