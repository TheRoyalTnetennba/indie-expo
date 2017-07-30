import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

import { NavBar, dummyCampaignShow } from '../common/component_helper';
import Footer from '../common/footer';
import Perk from './perk';
const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const RedditIcon = generateShareIcon('reddit');

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.NavBar = NavBar.bind(this);
    this.state = {
      donationClick: false,
      donationAmount: '',
    };
    this.settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      draggable: true,
      pauseOnHover: false,
      lazyLoad: true,
      className: 'campaign-show-slider',
      flex: 1,
    };
    this.campaign = Object.assign(dummyCampaignShow);
    this.perks = null;
    this.handleDonationChange = this.handleDonationChange.bind(this);
    this.handlePerkSubmit = this.handlePerkSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestCampaign(this.props.match.params.campaignID);
    this.intervalId = setInterval(this.next.bind(this), 10000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  componentWillReceiveProps(nextProps) {
    this.campaign = Object.assign(nextProps.state.showCampaign.showCampaign);
    this.perkMaker(nextProps.state.showCampaign.showCampaign.perks);
  }

  perkMaker(perks) {
    if (perks.length) {
      this.perks = perks.map(perk => (<Perk
        updateParent={(el, slice) => this.handlePerkSubmit(el, slice)}
        key={`perk-${perk.id}`}
        price={perk.price}
        title={perk.title}
        description={perk.description}
        image={perk.image_url}
      />
    ));
    } else {
      this.perks = [];
      this.perks.push(<Perk
        updateParent={(el, slice) => this.handlePerkSubmit(el, slice)}
        key="null-perk"
        price="5"
        title="No Perks Yet"
        description="Please accept our thanks instead"
        image="https://res.cloudinary.com/dy4gcvjff/image/upload/c_scale,w_1000/v1501195537/jqrez0nrkbvc2khsa2dz.jpg"
      />);
    }
  }

  next() {
    const that = this;
    that.slider.slickNext();
  }

  handleDonationInitial() {
    this.setState({ donationClick: true })
  }

  handleDonationChange() {
    return e => this.setState({ donationAmount: e.currentTarget.value })
  }

  handleDonationSubmit() {
    const contribution = {};
    contribution.user_id = this.props.state.session.currentUser.id;
    contribution.campaign_id = this.campaign.id;
    contribution.amount = this.state.donationAmount;
    this.props.newContribution(contribution);
    this.state.donationClick = false;
  }

  handlePerkSubmit(amount) {
    const contribution = {};
    contribution.user_id = this.props.state.session.currentUser.id;
    contribution.campaign_id = this.campaign.id;
    contribution.amount = amount;
    this.props.newContribution(contribution);
  }

  render() {
    const photoMe = (url) => { backgroundImage: `url(${url})` };

    const url = `http://indieexpo.co${this.props.match.url}`
    let backit;
    if (this.state.donationClick) {
      backit = (
        <div className="back-it-bar">
          <input className="back-it-bar-number" type="number" onChange={this.handleDonationChange()} placeholder="donation amount" value={this.state.donationAmount} />
          <a style={{marginLeft: '10px'}} onClick={this.handleDonationSubmit.bind(this)}>Submit Donation</a>
        </div>
      )
    } else {
      backit = (
        <div className="back-it-bar">
          <a onClick={this.handleDonationInitial.bind(this)}>Back It</a>
          <div className="social-buttons">
            <FacebookShareButton url={url} children={<FacebookIcon size={45} round={true} />} />
            <GooglePlusShareButton url={url} children={<GooglePlusIcon size={45} round={true} />} />
            <LinkedinShareButton url={url} children={<LinkedinIcon size={45} round={true} />} />
            <TwitterShareButton url={url} children={<TwitterIcon size={45} round={true} />} />
            <RedditShareButton url={url} children={<RedditIcon size={45} round={true} />} />
          </div>
        </div>
      )
    }
    const progress = this.campaign.progress >= 100 ? 100 : this.campaign.progress;
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <section className="campaign-show-hero">
          <div className="campaign-show-left">
            <Slider ref={c => this.slider = c} {...this.settings}>
              {this.campaign.image_urls.map(photo => <div ref={c => photo = c} key={`slider-div-${photo}`}><div className="campaign-show-photo" style={{backgroundImage: `url(${photo})`}} /></div>)}
            </Slider>
          </div>
          <div className="campaign-show-right">
            <h1 className="in-demand">InDemand</h1>
            <h1>{this.campaign.title}</h1>
            <h2 style={{fontWeight: 'normal'}}>{this.campaign.tagline}</h2>
            <div className="creator-box">
              <img className="profile-pic img-circle" src={this.campaign.creator.image_url} />
              <div className="creator-details">
                <Link to={`/users/${this.campaign.creator.creator_id}`} className="camp-show-creator-name">
                  {this.campaign.creator.first_name} {this.campaign.creator.last_name}
                </Link>
                <p>{this.campaign.city}, {this.campaign.country}</p>
              </div>
            </div>
            <div className="show-pretty-funds">${this.campaign.pretty_funds}</div>
            <div className="show-progress-bar-outer">
              <div className="show-progress-bar-inner" style={{width: `${progress}%`}}></div>
            </div>
            <div className="show-progress-details">
              <div className="show-progress-details-left">
                <p>{progress}</p>
                <p style={{marginLeft: '5px'}}>% of ${this.campaign.pretty_goal}</p>
              </div>
              <div className="show-progress-details-right">
                <p style={{fontWeight: 'bold'}}>{this.campaign.days_left}</p>
                <p style={{marginLeft: '5px'}}>days left</p>
              </div>
            </div>
            {backit}
          </div>
        </section>
        <section className="campaign-show-main">
          <div className="campaign-main-left">
            <h1>Overview</h1>
            <p className="camp-show-pitch">{this.campaign.pitch}</p>
            <h1>Details</h1>
            <p>{this.campaign.overview}</p>
          </div>
          <div className="campaign-main-right">
            <h1>Perks</h1>
            {this.perks}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default CampaignShow;
