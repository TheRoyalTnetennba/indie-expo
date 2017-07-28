import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { NavBar } from '../common/component_helper';
import Footer from '../common/footer';
import Perk from './perk';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.NavBar = NavBar.bind(this);
    this.state = {
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
    this.campaign = {
      title: '',
      image_urls: [],
      creator: {
        image_url: '',
        first_name: '',
        last_name: '',
        creator_id: '',
      },
      pretty_funds: '',
      progress: '',
      pretty_goal: '',
      days_left: '',
      overview: '',
      pitch: '',
    };
    this.perks = null;
    this.donationClick = false;
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
        price="0"
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
    console.log('donating');
  }

  handleDonationSubmit() {
    console.log('got it');
  }

  render() {
    const photoMe = (url) => { backgroundImage: `url(${url})` };
    const photoArray = this.campaign.image_urls.map(photo => <div className="campaign-show-photo" style={{backgroundImage: `url(${photo})`}} />);
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <section className="campaign-show-hero">
          <div className="campaign-show-left">
            <Slider ref={c => this.slider = c} {...this.settings}>
              <div>{photoArray[0]}</div>
              <div>{photoArray[1]}</div>
              <div>{photoArray[2]}</div>
              <div>{photoArray[3]}</div>
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
              <div className="show-progress-bar-inner" style={{width: `${this.campaign.progress}%`}}></div>
            </div>
            <div className="show-progress-details">
              <div className="show-progress-details-left">
                <p  >{this.campaign.progress}</p>
                <p style={{marginLeft: '5px'}}>% of ${this.campaign.pretty_goal}</p>
              </div>
              <div className="show-progress-details-right">
                <p style={{fontWeight: 'bold'}}>{this.campaign.days_left}</p>
                <p style={{marginLeft: '5px'}}>days left</p>
              </div>
            </div>
            <div className="back-it-bar">
              <a>Back It</a>
              <div>
                <a href="mailto:person@example.com" className="fa fa-envelope" aria-hidden="true" />
                <a className="fa fa-facebook-square" aria-hidden="true" />
                <a className="fa fa-twitter-square" aria-hidden="true" />
                <a className="fa fa-link" aria-hidden="true" />
                <a className="fa fa-reddit" aria-hidden="true" />
              </div>
            </div>
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
