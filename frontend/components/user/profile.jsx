import React from 'react';

import { NavBar } from '../common/component_helper';
import Footer from '../common/footer';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      campaigns: [],
      email: '',
      first_name: '',
      last_name: '',
      image_url: '',
      id: '',
      num_contributions: '',
    };
    this.NavBar = NavBar.bind(this);
    this.user = Object.assign(this.state);
  }

  componentWillMount() {
    this.props.requestUser(this.props.match.params.userID);
  }

  componentWillReceiveProps(nextProps) {
    this.user = Object.assign(nextProps.state.user.user);
    // this.perkMaker(nextProps.state.showCampaign.showCampaign.perks);

  }

  render() {
    const campArray = null;
    const photo = { backgroundImage: `url(${this.user.image_url})` }
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <div className="campaign-list-div">
          <section className="campaign-show-hero">
            <div className="campaign-show-left">
              <div className="campaign-show-slider">
                <div className="campaign-show-photo" style={photo}></div>
              </div>
            </div>
            <div className="campaign-show-right">
              <div className="creator-box">
                <img className="profile-pic img-circle" src={this.user.image_url} />
                <div className="creator-details">
                  <h2 className="about-me">About Me</h2>
                  <h2 className="about-me-campaign">placeholder6</h2>
                  <h2 className="about-me-contribution">placeholder7</h2>
                </div>
              </div>
              <div className="show-pretty-funds">placeholder5</div>

              <div className="show-progress-details">
                <div className="show-progress-details-left">
                  <p>placeholder1</p>
                  <p style={{marginLeft: '5px'}}>% of placeholder2</p>
                </div>
                <div className="show-progress-details-right">
                  <p style={{fontWeight: 'bold'}}>placeholder3</p>
                  <p style={{marginLeft: '5px'}}>placeholder4</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Profile;
