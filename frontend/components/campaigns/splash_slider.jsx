import React from 'react';
import Slider from 'react-slick';
import SplashItem from './splash_item';
import SplashLoader from './splash_loader';
import { dummyCampaignShow } from '../common/component_helper';
import { RingLoader } from 'react-spinners';

class SplashSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.campaigns = [];
    this.settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      className: 'splash-carousel',
    };
    this.campaigns = [Object.assign(dummyCampaignShow)];
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
    this.props.signup(newState);
  }

  componentWillMount() {
    this.props.requestCampaigns();
    this.intervalId = setInterval(this.next.bind(this), 10000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  componentWillReceiveProps(nextProps) {
    this.campaigns = Object.keys(nextProps.state.campaigns).map(idx => nextProps.state.campaigns[idx]).slice(0,6);
    this.setState({ loading: false })
  }

  next() {
    const that = this;
    that.slider.slickNext();
  }

  render() {
    const campArray = this.campaigns.map(camp => <SplashLoader key={camp.id} campaign={camp} />);
    if (this.state.loading) {
      return (
        <Slider ref={c => this.slider = c} {...this.settings}>
          {this.campaigns.map(camp => <div ref={c => camp = c} key={`slider-div-${camp.id}`}><SplashLoader key={camp.id} campaign={camp} /></div>)}
        </Slider>
      )
    } else {
      return (
        <Slider ref={c => this.slider = c} {...this.settings}>
          {this.campaigns.map(camp => <div ref={c => camp = c} key={`slider-div-${camp.id}`}><SplashItem key={camp.id} campaign={camp} /></div>)}
        </Slider>
      )
    }
  }
}

export default SplashSlider;



//
// <head>
//   <title>Bootstrap Example</title>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
//   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
// </head>
// <body>
//
// <div class="container">
//   <h2>Carousel Example</h2>
//   <div id="myCarousel" class="carousel slide" data-ride="carousel">
//     <!-- Indicators -->
//     <ol class="carousel-indicators">
//       <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//       <li data-target="#myCarousel" data-slide-to="1"></li>
//       <li data-target="#myCarousel" data-slide-to="2"></li>
//     </ol>
//
//     <!-- Wrapper for slides -->
//     <div class="carousel-inner">
//       <div class="item active">
//         <img src="la.jpg" alt="Los Angeles" style="width:100%;">
//       </div>
//
//       <div class="item">
//         <img src="chicago.jpg" alt="Chicago" style="width:100%;">
//       </div>
//
//       <div class="item">
//         <img src="ny.jpg" alt="New york" style="width:100%;">
//       </div>
//     </div>
//
//     <!-- Left and right controls -->
//     <a class="left carousel-control" href="#myCarousel" data-slide="prev">
//       <span class="glyphicon glyphicon-chevron-left"></span>
//       <span class="sr-only">Previous</span>
//     </a>
//     <a class="right carousel-control" href="#myCarousel" data-slide="next">
//       <span class="glyphicon glyphicon-chevron-right"></span>
//       <span class="sr-only">Next</span>
//     </a>
//   </div>
// </div>
//
// </body>
