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
      infinite: false,
      speed: 500,
      autoplaySpeed: 2,
      autoplay: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: false,
      className: 'campaign-index-item',
      flex: 1,
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
          <div className="index-card">{campArray[3]}</div>
          <div className="index-card">{campArray[4]}</div>
          <div className="index-card">{campArray[5]}</div>
          <div className="index-card">{campArray[6]}</div>
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

// nextArrow: <i className="fa fa-angle-right index-card-arrows" aria-hidden="true" />,
// prevArrow: <i className="fa fa-angle-left index-card-arrows" aria-hidden="true" />,
