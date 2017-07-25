import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { NavBar } from '../common/component_helper';
import Footer from '../common/footer';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.NavBar = NavBar.bind(this);
    this.state = {
    };
    this.settings = {
      dots: false,
      infinite: false,
      speed: 500,
      autoplaySpeed: 2,
      autoplay: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: false,
      className: 'campaign-show-slider',
      flex: 1,
    };
  }

  componentWillMount() {
    this.props.requestCampaign(this.props.match.params.campaignID);
  }

  componentWillReceiveProps(nextProps) {
    this.campaigns = Object.assign(nextProps.state.campaigns.showCampaign);
    this.creator = Object.assign(nextProps.state.campaigns.showCampaign.creator);
    this.photos = nextProps.state.campaigns.showCampaign.image_urls;
  }

  render() {
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <Slider {...this.settings}>
          <div><h1>things</h1></div>
        </Slider>
        <Footer />
      </div>
    );
  }
}

export default CampaignShow;
