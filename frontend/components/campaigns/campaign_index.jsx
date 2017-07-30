import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Slider from 'react-slick';

import { NavBar, dummyCampaignShow } from '../common/component_helper';
import CampaignIndexItem from './campaign_index_item';
import SplashSliderContainer from './splash_slider_container';
import Footer from '../common/footer';
import { LeftNavButton, RightNavButton } from '../common/slider_arrows';


class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);
    this.NavBar = NavBar.bind(this);
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
      responsive: [ { breakpoint: 1079, settings: { slidesToShow: 2 } }, { breakpoint: 1500, settings: { slidesToShow: 3 } } ],
      className: 'campaign-index-item-div',
      flex: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.campaigns = Object.keys(dummyCampaignShow).map(camp => camp);
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

  handleClick(idx, e) {
    e.preventDefault();
    const id = this.campaigns[idx].id;
    this.props.history.push(`/campaigns/${id}`);
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
          { this.campaigns.map((camp, idx) => <div key={`i-s-div-${idx}`} ref={c => camp = c} onClick={e => this.handleClick(idx, e)}><CampaignIndexItem key={camp.id} campaign={camp} /></div>) }
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
