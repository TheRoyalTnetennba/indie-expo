import React from 'react';

import { NavBar } from '../common/component_helper';
import Footer from '../common/footer';
import CampaignListItem from '../campaigns/campaign_list_item';
import { SocialIcon } from 'react-social-icons';

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
      selected: true,
    };
    this.NavBar = NavBar.bind(this);
    this.user = Object.assign(this.state);
    this.profileTab = this.profileTab.bind(this);
    this.campaignsTab = this.campaignsTab.bind(this);
    this.profileView = (<h1>loading</h1>);
    this.campaignsView = (<h1>loading</h1>);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.requestUser(this.props.match.params.userID);
  }

  componentWillReceiveProps(nextProps) {
    this.user = Object.assign(nextProps.state.user.user);
    // this.perkMaker(nextProps.state.showCampaign.showCampaign.perks);
    this.genProfileTab();
    this.genCampaignsTab();
  }

  genProfileTab() {
    const photo = { backgroundImage: `url(${this.user.image_url})` }
    let numCampaigns;
    if (this.user.campaigns.length > 1) {
      numCampaigns = `Campaigns: ${this.user.campaigns.length}`;
    } else {
      numCampaigns = `Campaign: ${this.user.campaigns.length}`;
    }
    let numContributions;
    if (this.user.num_contributions > 1) {
      numContributions = `Contributions: ${this.user.num_contributions}`;
    } else {
      numContributions = `Contribution: ${this.user.num_contributions}`;
    }
    this.profileView = (
      <section className="profile-show-hero">
        <div className="campaign-show-left">
          <div className="campaign-show-slider">
            <div className="campaign-show-photo" style={photo}></div>
          </div>
        </div>
        <div className="campaign-show-right">
          <div className="creator-box-profile">
            <div className="about-me">
              <img className="profile-pic img-circle" src={this.user.image_url} />
              <h2 className="about-me-title">About Me</h2>
            </div>
            <h1 className="about-me-subtitle">Activity</h1>
            <div className="creator-details-profile">
              <h2 className="about-me-contribution">{numCampaigns}</h2>
              <h2 className="about-me-contribution">{numContributions}</h2>
            </div>
            <h1 className="about-me-subtitle">Find Me On</h1>
            <div className="creator-details-profile">
              <div className="social-buttons">
                <SocialIcon url="https://www.linkedin.com/in/graham-paye-2341238b/" />
                <SocialIcon url="https://github.com/TheRoyalTnetennba" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  genCampaignsTab() {
    let campaigns;
    let contributions;
    if (this.user.campaigns.length > 0) {
      campaigns = this.user.campaigns.map(userCampaign => <div onClick={e => this.handleClick(userCampaign.id, e)} key={`outer-${userCampaign.id}`} >
      <CampaignListItem
        key={userCampaign.id}
        campaign={userCampaign}
      /></div>);
    }
    if (this.user.num_contributions > 0) {
      contributions = this.user.campaigns.map(userCampaign => <div onClick={e => this.handleClick(userCampaign.id, e)} key={`outer-${userCampaign.id}`} >
      <CampaignListItem
        key={userCampaign.id}
        campaign={userCampaign}
      /></div>);
    }
    this.campaignsView = (
      <div className="profile-tabs-campaigns-container">
        {campaigns ? <h1 className="about-me-campaigns-tab">My Campaigns</h1> : null}
        {campaigns ? campaigns : null}
        {contributions ? <h1 className="about-me-campaigns-tab">Campaigns I've Supported</h1> : null}
        {contributions ? contributions : null}
      </div>
    )
  }

  handleClick(id, e) {
    e.preventDefault();
    this.props.history.push(`/campaigns/${id}`)
  }

  profileTab() {
    this.setState({ selected: true });
  }

  campaignsTab() {
    this.setState({ selected: false });
  }

  render() {
    const campArray = null;
    const profile = this.state.selected ? "profile-tab-link-selected" : "profile-tab-link";
    const toShow = this.state.selected ? this.profileView : this.campaignsView;
    let campaigns;
    if (this.user.num_contributions === 0 && this.user.campaigns.length === 0) {
      campaigns = 'hidden';
      this.campaignsTab();
    } else if (this.state.selected) {
      campaigns = 'profile-tab-link';
    } else {
      campaigns = 'profile-tab-link-selected';
    }
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <div className="profile-tabs-container">
          <h1 className="profile-name">{this.user.first_name} {this.user.last_name}</h1>
          <div className="profile-tabs">
            <a onClick={this.profileTab} className={profile}>Profile</a>
            <a onClick={this.campaignsTab} className={campaigns}>Campaigns</a>
          </div>
        </div>
        {toShow}
        <section className="profile-show-main">
          <div className="campaign-main-left">
            <h1 className="about-me-subtitle">Introduction</h1>
            <p className="camp-show-pitch">{this.user.bio}</p>
          </div>
          <div className="campaign-main-right">
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Profile;
