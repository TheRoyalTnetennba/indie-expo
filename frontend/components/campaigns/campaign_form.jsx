


import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from '../common/component_helper';

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tagline: '',
      goal: '',
      image_url: '',
      section: 'Basics',
    };
    this.NavBar = NavBar.bind(this);
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
      <div className="cf campaign-form-main-div">
        <aside className="col col-1-4">
          <div className="annotation-pill-yellow">DRAFT CAMPAIGN</div>
          <p>{this.state.title}</p>
        </aside>
        <div className="col camp-form-content">
          {this.NavBar(this.props)}
          <nav className="secondary-nav">
            <div>Campaign / <a className="purple-text">{this.state.section}</a></div>
            <a>Preview</a>
            <a>Save Campaign</a>
            <span className="purple-button">Review & Launch</span>
            <ul>
              <li href="#basics">BASICS</li>
            </ul>
          </nav>
          <div>
            <h1 id="basics">Basics</h1>
            <p>Make a good first impression: introduce your campaign objectives and entice
              people to learn more. This basic information will represent your campaign on your
              campaign page, on your campaign card, and in searches.</p>
            <div className="campaign-form-field">
              <label htmlFor="campaign-title">
                Campaign Title<span className="required" />
              </label>
              <legend className="session-errors">
                What is the title of your campaign?
              </legend>
              <input id="campaign-title" type="text" value={this.title}></input>
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-tagline">
                Campaign Tagline<span className="required" />
              </label>
              <legend className="session-errors">
                Provide a short description that best describes your campaign to your audience.
              </legend>
              <input id="campaign-tagline" type="text" value={this.tagline}></input>
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-card-image">
                Campaign Card Image<span className="required" />
              </label>
              <legend className="session-errors">
                Upload a square image that represents your campaign.
              </legend>
              <legend className="session-errors">
                640 x 640 recommended resolution, 220 x 220 minimum resolution.
              </legend>
              <div className="campaign-form-field-image">
                <div className="campaign-form-field-image-label">
                  <i className="fa fa-camera camera-circle" aria-hidden="true" />
                  <a>UPLOAD IMAGE</a>
                </div>
              </div>
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-card-location">
                Campaign Card Image<span className="required" />
              </label>
              <legend className="session-errors">
                Upload a square image that represents your campaign.
              </legend>
              <legend className="session-errors">
                640 x 640 recommended resolution, 220 x 220 minimum resolution.
              </legend>
              <input id="campaign-card-location" type="text" value={this.image_url} />
            </div>
          </div>
        </div>
      </div>
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
