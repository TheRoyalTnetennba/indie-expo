import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    this.campaigns = Object.keys(nextProps.state.campaigns).map(idx => nextProps.state.campaigns[idx]);
  }

  handler (e) {
    // console.log('Hello ' + e.target.dataset.message); // Hello world
  }

  handleClick(id, e) {
    e.preventDefault();
    this.props.history.push(`/campaigns/${id}`)
  }

  render() {
    const campArray = this.campaigns.map(camp => <CampaignIndexItem key={camp.id} campaign={camp} />);
    const keyArray = this.campaigns.map(camp => camp.id);
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <SplashSliderContainer />
        <Slider {...this.settings}>
          <div onClick={e => this.handleClick(keyArray[0], e)}>{campArray[0]}</div>
          <div onClick={e => this.handleClick(keyArray[1], e)}>{campArray[1]}</div>
          <div onClick={e => this.handleClick(keyArray[2], e)}>{campArray[2]}</div>
          <div onClick={e => this.handleClick(keyArray[3], e)}>{campArray[3]}</div>
          <div onClick={e => this.handleClick(keyArray[4], e)}>{campArray[4]}</div>
          <div onClick={e => this.handleClick(keyArray[5], e)}>{campArray[5]}</div>
          <div onClick={e => this.handleClick(keyArray[6], e)}>{campArray[6]}</div>
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
