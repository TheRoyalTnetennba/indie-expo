import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../common/component_helper';
import CampaignIndexItem from './campaign_index_item';
import SplashSliderContainer from './splash_slider_container';
import Footer from '../common/footer';
import Slider from 'react-slick';

class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);
    this.NavBar = NavBar.bind(this);
    this.campaigns = [];
    this.state = {
    };
    this.settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplaySpeed: 2,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      className: 'splash-carousel',
    };

  }

  componentWillMount() {
    this.props.requestCampaigns();
  }

  componentWillReceiveProps(nextProps) {
    this.campaigns = Object.keys(nextProps.state.campaigns).map(idx => nextProps.state.campaigns[idx]);
  }

  render() {
    const campArray = this.campaigns.map(camp => <CampaignIndexItem key={camp.id} campaign={camp} />);
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <SplashSliderContainer />
        <Slider {...this.settings}>
          <div className="index-card">{campArray[0]}</div>
          <div className="index-card">{campArray[1]}</div>
          <div className="index-card">{campArray[2]}</div>
        </Slider>
        <Footer />
      </div>
    );
  }
}

export default CampaignIndex;


// nextArrow: <i className="fa fa-angle-right index-card-arrows" aria-hidden="true" />,
// prevArrow: <i className="fa fa-angle-left index-card-arrows" aria-hidden="true" />,
// className="index-main-div"
// className="index-main-div"
// className="index-card"
