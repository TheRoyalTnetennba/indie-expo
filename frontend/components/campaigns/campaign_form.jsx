import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Scroll from 'react-scroll';

import { NavBar } from '../common/component_helper';

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
var scroller = Scroll.scroller;

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tagline: '',
      goal: '',
      section: 'Basics',
      image_url: '',
      city: '',
      country: '',
      category: '',
      duration: '',
      menuOpen: true,
    };
    this.categories = [];
    this.NavBar = NavBar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.requestCategories = this.props.requestCategories.bind(this);
    this.cloudinaryPreset = 'indieexpo';
    this.cloudinaryURL = 'https://api.cloudinary.com/v1_1/dy4gcvjff/image/upload';
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleSetActive = this.handleSetActive.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(this.cloudinaryURL)
                        .field('upload_preset', this.cloudinaryPreset)
                        .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  toggleMenu() {
    const menuStatus = !this.state.menuOpen
    console.log(menuStatus)
    this.setState({
      menuOpen: menuStatus,
    });
  }

  componentWillMount() {
    this.props.requestCategories();
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  componentWillReceiveProps(nextProps) {
    this.categories = Object.keys(nextProps.state.categories).map(idx => nextProps.state.categories[idx]);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = Object.assign({}, this.state);
    this.props.signup(newState);
  }

  handleSetActive(to) {
    scroller.scrollTo(to, {
      duration: 1500,
      delay: 100,
      smooth: true,
      // containerId: 'ContainerElementID',
    })
  }

  render() {
    const categories = this.categories.map(cat => <option key={cat.id} value={cat.title}>{cat.title}</option>);
    const photoStyles = {
      display: 'relative',
      top: '0',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${this.state.image_url})`,
      overflow: 'hidden',
    };
    let imageBox;
    if (this.state.image_url.length) {
      imageBox = (
        <div className="campaign-form-field-image-label" style={photoStyles}>
        </div>
      );
    } else {
      imageBox = (
        <div className="campaign-form-field-image-label">
          <i className="fa fa-camera camera-circle" aria-hidden="true" />
          <a>UPLOAD IMAGE</a>
        </div>
      );
    }
    const icon = this.state.menuOpen ? 'fa fa-angle-up' : 'fa fa-angle-down';
    const asideNavLinkClass = this.state.menuOpen ? 'aside-nav-link' : 'hidden';
    return (
      <div className="cf campaign-form-main-div">
        <aside className="col col-1-4">
          <div className="annotation-pill-yellow">DRAFT CAMPAIGN</div>
          <p style={{textTransform: 'uppercase', color: '#C8C8C8', minHeight: '19px'}}>{this.state.title}</p>
          <div className="preview-editor-links">
            <a>Preview Campaign</a>
            <a onClick={this.toggleMenu}>Campaign Editor<i className={icon} aria-hidden="true" /></a>
            <Link className={asideNavLinkClass} activeClass="active-nav-link" to="basics" spy={true} smooth={false} offset={100} duration={50} onSetActive={this.handleSetActive}>
              basics
            </Link>
            <Link className={asideNavLinkClass} activeClass="active-nav-link" to="story" spy={true} smooth={false} offset={50} duration={50} onSetActive={this.handleSetActive}>
              story
            </Link>
            <Link className={asideNavLinkClass} activeClass="active-nav-link" to="perks" spy={true} smooth={false} duration={50} onSetActive={this.handleSetActive}>
              perks
            </Link>
            <Link className={asideNavLinkClass} activeClass="active-nav-link" to="team" spy={true} smooth={false} duration={50} onSetActive={this.handleSetActive}>
              team
            </Link>
            <Link className={asideNavLinkClass} activeClass="active-nav-link" to="funding" spy={true} smooth={false} duration={50} onSetActive={this.handleSetActive}>
              funding
            </Link>
            <Link className={asideNavLinkClass} activeClass="active-nav-link" to="extra" spy={true} smooth={false} duration={50} onSetActive={this.handleSetActive}>
              extra
            </Link>
          </div>
        </aside>
        <div className="col camp-form-content">
          {this.NavBar(this.props)}
          <nav className="secondary-nav">
            <div>Campaign / <a className="purple-text">{this.state.section}</a></div>
            <a>Preview</a>
            <a>Save Campaign</a>
            <span className="purple-button">Review & Launch</span>
          </nav>
          <Element name="basics">
            <h1 className="form-header">Basics</h1>
            <p>Make a good first impression: introduce your campaign objectives and entice
              people to learn more. This basic information will represent your campaign on your
              campaign page, on your campaign card, and in searches.</p>
            <div className="campaign-form-field">
              <label htmlFor="campaign-title">
                Campaign Title<span className="required" />
              </label>
              <legend className="session-errors">
                What is the title of your campaign?
              </legend>
              <input onChange={this.update('title')} id="campaign-title" type="text" value={this.title}></input>
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-tagline">
                Campaign Tagline<span className="required" />
              </label>
              <legend className="session-errors">
                Provide a short description that best describes your campaign to your audience.
              </legend>
              <input onChange={this.update('tagline')} id="campaign-tagline" type="text" value={this.tagline}></input>
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-card-image">
                Campaign Card Image<span className="required" />
              </label>
              <legend className="session-errors">
                Upload a square image that represents your campaign.
              </legend>
              <legend className="session-errors">
                640 x 640 recommended resolution, 220 x 220 minimum resolution.
              </legend>
              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}
                className="campaign-form-field-image">
                {imageBox}
              </Dropzone>
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-location-city">
                Location<span className="required" />
              </label>
              <legend className="session-errors">
                Choose the location where you are running the campaign. This location will be visible on your campaign page for your audience to see.
              </legend>
              <div style={{flex: 1, width: '100%'}}>
                <input style={{display: 'inline-block', width: '33%', marginRight: '15px'}} onChange={this.update('city')} placeholder="City" id="campaign-location-city" type="text" value={this.city}></input>
                <input style={{display: 'inline-block', width: '55%'}} onChange={this.update('country')} placeholder="Country" id="campaign-tagline" type="text" value={this.country}></input>
              </div>
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-category">
                Category<span className="required" />
              </label>
              <legend className="session-errors">
                To help backers find your campaign, select a category that best represents your project.
              </legend>
              <select defaultValue="select-category" onChange={this.update('category')}>
                {categories}
              </select>
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-duration">
                Campaign Duration<span className="required" />
              </label>
              <legend className="session-errors">
                How many days will you be running your campaign for? You can run a campaign for any number of days, with a 60 day duration maximum.
              </legend>
              <input onChange={this.update('duration')} id="campaign-duration" type="number" value={this.duration} />
            </div>
          </Element>
        </div>
        <Element name="story" className="col camp-form-content">
          <div>
            <h1 className="form-header">Story</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Element>
      </div>
    );
  }
}

export default CampaignForm;
