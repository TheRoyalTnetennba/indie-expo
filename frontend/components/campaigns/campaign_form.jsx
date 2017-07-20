import React from 'react';

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      goal: '',
      image_url: '',
    };
    console.log(this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
    this.props.signup(newState);
  }

  render() {
    return (
      <section>
        <h1>Form</h1>
      </section>
    );
  }
}

export default CampaignForm;

// import React from 'react';
// import Modal from 'react-modal';
//
// class SignUpModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalOpen: false,
//       email: '',
//       password: '',
//       first_name: '',
//       last_name: '',
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.update = this.update.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     this.openModal = this.openModal.bind(this);
//     this.handleGuest = this.handleGuest.bind(this);
//   }
//
//   closeModal() {
//     this.setState({ modalOpen: false });
//   }
//
//   openModal() {
//     this.setState({ modalOpen: true });
//   }
//
//   update(property) {
//     return e => this.setState({ [property]: e.currentTarget.value });
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const newState = Object.assign({}, this.state);
//     this.props.signup(newState);
//   }
//
//   handleGuest(e) {
//     e.preventDefault();
//     this.props.guestLogin();
//   }
//
//   instructions() {
//     if (this.props.state.session.errors && this.props.state.session.errors.length > 0) {
//       return (
//         <ul className="session-errors">
//           {this.props.state.session.errors.map((error, idx) => (
//             <li key={`sessionerror${idx}`}>{error.split(' #')[0]}</li>
//           ))}
//           <p className="session-instructions">Or log in with email</p>
//         </ul>
//       );
//     }
//     return (
//       <p className="session-instructions">Or log in with email</p>
//     );
//   }
//
//   render() {
//     return (
//       <h2 onClick={this.openModal}>Sign Up
//         <Modal
//           style={this.props.style}
//           contentLabel={this.props.contentLabel}
//           isOpen={this.state.modalOpen}
//           className="SessionForm"
//           onRequestClose={this.closeModal}>
//           <i className="fa fa-times close-button" aria-hidden="true" onClick={this.closeModal}></i>
//           <button onClick={this.handleGuest} className="guest-login-button">Login As Guest User</button>
//           {this.instructions()}
//           <input type="text" placeholder="First Name" value={this.state.first_name} onChange={this.update('first_name')} />
//           <input type="text" placeholder="Last Name" value={this.state.last_name} onChange={this.update('last_name')} />
//           <input type="email" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
//           <input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
//           <button className="signup-button" onClick={this.handleSubmit}>CREATE AN ACCOUNT</button>
//         </Modal>
//       </h2>
//     );
//   }
// }
//
// export default SignUpModal;

// if (this.props.state.session.currentUser && Object.keys(this.props.state.session.currentUser).length) {
//   return (
//     <NavUserDropdownContainer />
//   );
// }
// return (
//   <div className="nav-session-links">
//     <SignUpModalContainer /><LoginModalContainer />
//   </div>
// );
