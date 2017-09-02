import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

import { NavBar, dummyCampaignShow } from '../common/component_helper';
import CampaignIndexItem from './campaign_index_item';
import SplashSliderContainer from './splash_slider_container';
import Footer from '../common/footer';


class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);
    this.NavBar = NavBar.bind(this);
    this.state = {
      slideIdx: 0,
      slidesToShow: 4,
      loading: true,
    };
    this.camps = [];
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.requestCampaigns();
  }

  componentWillReceiveProps(nextProps) {
    this.campaigns = Object.keys(nextProps.state.campaigns).map(idx => nextProps.state.campaigns[idx]);
    this.campaigns = this.campaigns.reverse();
    this.moveSlider(0)
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
    let slideIdx = this.state.slideIdx + num;
    this.camps = this.campaigns.map((camp, idx) => 
      <div 
       key={`i-s-div-${idx}`} 
       ref={c => camp = c} 
       onClick={e => this.handleClick(idx, e)}>
        <CampaignIndexItem key={camp.id} campaign={camp} />
      </div>)
    this.setState({ slideIdx: slideIdx, loading: false, slidesToShow: slidesToShow });
  }

  idxNormalize(idx, len = this.camps.length) {
    if (idx < 0) {
      return (idx + (888 * len)) % len;
    } else if (idx >= len) {
      return idx % len;
    }
    console.log(idx);
    return idx;
  }

  
  render() {
    const spinner = (<MoonLoader color={'#123abc'} loading={this.state.loading} />);
    const campWindow = [];
    if (!this.state.loading) {
      for (let i = this.state.slideIdx; i < this.state.slidesToShow + this.state.slideIdx; i += 1) {
        campWindow.push(this.camps[this.idxNormalize(i)])
      }
    }
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <SplashSliderContainer />
        <div className="home-slider-lower">
          <i onClick={el => this.moveSlider(-1)} className="fa fa-angle-left index-card-arrows" aria-hidden="true" />
            { this.state.loading ? spinner : campWindow }
          <i onClick={el => this.moveSlider(1)} className="fa fa-angle-right index-card-arrows" aria-hidden="true" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default CampaignIndex;
