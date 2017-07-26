import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../common/component_helper';
import CampaignIndexItem from './campaign_index_item';
import SplashSliderContainer from './splash_slider_container';
import Footer from '../common/footer';
import Slider from 'react-slick';
import { LeftNavButton, RightNavButton } from '../common/slider_arrows';

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
      lazyLoad: true,
      speed: 500,
      arrows: true,
      autoplay: false,
      nextArrow: <RightNavButton />,
      prevArrow: <LeftNavButton />,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: false,
      draggable: false,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 2 } }, { breakpoint: 1024, settings: { slidesToShow: 3 } } ],
      className: 'campaign-index-item-div',
      flex: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.requestCampaigns();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.campaigns = Object.keys(nextProps.state.campaigns).map(idx => nextProps.state.campaigns[idx]);
  }

  view(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.currentTarget);
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
          <div>{campArray[0]}</div>
          <div>{campArray[1]}</div>
          <div>{campArray[2]}</div>
          <div>{campArray[3]}</div>
          <div>{campArray[4]}</div>
          <div>{campArray[5]}</div>
          <div>{campArray[6]}</div>
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
