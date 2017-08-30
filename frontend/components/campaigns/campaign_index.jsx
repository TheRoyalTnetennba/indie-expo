import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { NavBar, dummyCampaignShow } from '../common/component_helper';
import CampaignIndexItem from './campaign_index_item';
import SplashSliderContainer from './splash_slider_container';
import Footer from '../common/footer';


class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);
    this.NavBar = NavBar.bind(this);
    this.state = {
      sliderIdx: 0,
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

  moveSlider(num) {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let slidesToShow;
    if (width > 1080) {
      slidesToShow = 4;
    } else if (width > 749) {
      slidesToShow = 3;
    } else if (width > 499) {
      slidesToShow = 2;
    } else {
      slidesToShow = 1;
    }
    const campArray = this.campaigns.map(camp => <CampaignIndexItem key={camp.id} campaign={camp} />);
    if (this.state.sliderIdx + num < 0) {

    } else if (this.state.sliderIdx + num + slidesToShow > campArray.length)
  }

  render() {
    // { this.campaigns.reverse().map((camp, idx) => <div key={`i-s-div-${idx}`} ref={c => camp = c} onClick={e => this.handleClick(idx, e)}><CampaignIndexItem key={camp.id} campaign={camp} /></div>) }

    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <SplashSliderContainer />
        <div className="home-slider-lower">
          <i onClick={el => this.moveSlider(-1)} className="fa fa-angle-left index-card-arrows" aria-hidden="true" />
          <i onClick={el => this.moveSlider(1)} className="fa fa-angle-right index-card-arrows" aria-hidden="true" />
        </div>
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
