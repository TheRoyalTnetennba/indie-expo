import React from 'react';
import Modal from 'react-modal';
import { style } from '../user/modal_style';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      email: '',
      password: '',
    };
    this.style = style;
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
  }

  render() {
    return (
      <footer>
        <div className="footer-subsection" style={{paddingLeft: '90px'}}>
          <h1>Campaigning</h1>
          <a onClick={this.openModal}>Start Your Campaign</a>
          <a onClick={this.openModal}>InDemand</a>
          <a onClick={this.openModal}>Equity</a>
          <a onClick={this.openModal}>Enterprise</a>
          <a onClick={this.openModal}>Generosity</a>
          <a onClick={this.openModal}>Success Stories</a>
          <a onClick={this.openModal}>Pricing</a>
        </div>
        <div className="footer-subsection">
          <h1>Contributing</h1>
          <a onClick={this.openModal}>Explore</a>
          <a onClick={this.openModal}>Collections</a>
          <a onClick={this.openModal}>Parner Pages</a>
          <a onClick={this.openModal}>Equity</a>
        </div>
        <div className="footer-subsection" style={{flex: 2, paddingRight: '90px'}}>
          <h1>Sign Up For Inspiration</h1>
          <input type="email" placeholder="Your email address"/>
          <div className="newsletter-signup-button">Sign Up Now</div>
        </div>
        <div className="footer-subsection" style={{paddingLeft: '90px'}}>
          <h1>About Indie-Expo</h1>
          <a onClick={this.openModal}>How It Works</a>
          <a onClick={this.openModal}>About Us</a>
          <a onClick={this.openModal}>Indiegogo vs. Kickstarter</a>
          <a onClick={this.openModal}>Careers</a>
          <a onClick={this.openModal}>Brand Resources</a>
          <a onClick={this.openModal}>Press</a>
          <a onClick={this.openModal}>Blog</a>
        </div>
        <div className="footer-subsection">
          <h1>Help</h1>
          <a onClick={this.openModal}>Essential Guide to Crowdfunding</a>
          <a onClick={this.openModal}>Trust & Safety</a>
          <a onClick={this.openModal}>Help & Support</a>
          <a onClick={this.openModal}>Contact Us</a>
        </div>
        <div className="footer-subsection" style={{flex: 2, paddingRight: '90px'}}>
          <h1>Follow Us</h1>
          <a onClick={this.openModal}>Essential Guide to Crowdfunding</a>
          <a onClick={this.openModal}>Trust & Safety</a>
          <a onClick={this.openModal}>Help & Support</a>
          <a onClick={this.openModal}>Contact Us</a>
        </div>
        <Modal
          style={style}
          contentLabel="Hire Me"
          isOpen={this.state.modalOpen}
          className="SessionForm"
          onRequestClose={this.closeModal}>
          <i className="fa fa-times close-button" aria-hidden="true" onClick={this.closeModal}></i>
          <button className="guest-login-button">Get in touch</button>
          <p>This app was made in 10 days using rails, postgresql, nodejs, and react</p>
        </Modal>
      </footer>
    );
  }
}

export default Footer;
