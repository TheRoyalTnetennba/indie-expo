import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Scroll from 'react-scroll';

import { NavBar } from '../common/component_helper';
import PerkForm from './campaign_perk_form';

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
var scroller = Scroll.scroller;


class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    const creator = parseInt(this.props.state.session.currentUser.id, 10);
    this.state = {
      title: '',
      tagline: '',
      goal: '',
      section: 'basics',
      image_url: '',
      city: '',
      country: '',
      category: '',
      duration: '',
      menuOpen: true,
      overview: '',
      pitch: '',
      creator_id: creator,
      perks: {
        0: {
          title: '',
          image_url: '',
          description: '',
          price: '',
        },
      },
      numPerks: 1,
      uploadedFile: [],
    };
    this.categories = [];
    this.NavBar = NavBar.bind(this);
    this.update = this.update.bind(this);
    this.requestCategories = this.props.requestCategories.bind(this);
    this.cloudinaryPreset = 'indieexpo';
    this.cloudinaryURL = 'https://api.cloudinary.com/v1_1/dy4gcvjff/image/upload';
    this.toggleMenu = this.toggleMenu.bind(this);
    this.perkFormGen = this.perkFormGen.bind(this);
    this.handlePerk = this.handlePerk.bind(this);
    this.updatePerkNum = this.updatePerkNum.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.incrementPerks = this.incrementPerks.bind(this);
    this.updatePerkNum = this.updatePerkNum.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSetInactive = this.handleSetInactive.bind(this);
    this.handleSetActive = this.handleSetActive.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    const upload = request.post(this.cloudinaryURL)
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
    this.perkFormGen(this.state.numPerks);
  }

  componentWillReceiveProps(nextProps) {
    this.categories = Object.keys(nextProps.state.categories).map(idx => nextProps.state.categories[idx]);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  handlePerk(idx, newPerkSlice) {
    const newPerks = Object.assign(this.state.perks);
    newPerks[idx] = Object.assign(newPerkSlice);
    this.setState({ perks: newPerks });
  }

  updatePerkNum(numPerks) {
    this.setState({ numPerks });
    return e => this.perkFormGen(numPerks);
  }

  handleSubmit() {
    return e => {
      e.preventDefault();
      const newState = Object.assign(this.state);
      delete newState.uploadedFile;
      this.props.newCampaign(newState).then(() => this.props.history.push(`/campaigns/${this.props.state.showCampaign.showCampaign.id}`));
    };
  }

  perkFormGen(numPerks) {
    const perkForms = [];
    for (let i = 0; i < numPerks; i++) {
      let j = (
        <PerkForm key={`perk-form-number-${i}`} perkNum={i} updateParent={(el, slice) => this.handlePerk(el, slice)} />
      );
      perkForms.push(j);
    }
    return perkForms;
  }

  incrementPerks() {
    this.updatePerkNum(this.state.numPerks + 1)
  }

  handleSetInactive(e) {
    console.log(e);
  }

  handleSetActive(e) {
    this.setState({ section: e })
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
    const perkOpenner = (
      <div>
        <h1 className="form-header">Perks</h1>
        <p>Perks are incentives offered to backers in exchange for their support.
          You may edit your perk details until the perk is claimed.
        </p>
      </div>
    );
    const perkForms = this.perkFormGen(this.state.numPerks);
    return (
      <div className="cf campaign-form-main-div" >
        <aside className="col col-1-4">
          <div className="annotation-pill-yellow">DRAFT CAMPAIGN</div>
          <p style={{textTransform: 'uppercase', color: '#C8C8C8', minHeight: '19px', marginLeft: '20px'}}>{this.state.title}</p>
          <div className="preview-editor-links">
            <a>Preview Campaign</a>
            <a onClick={this.toggleMenu}>Campaign Editor<i className={icon} aria-hidden="true" /></a>
            <Link className={asideNavLinkClass} onSetInactive={this.handleSetInactive} activeClass="active-nav-link" to="basics" spy={true} smooth={false} offset={0} duration={50} onSetActive={this.handleSetActive}>
              basics
            </Link>
            <Link className={asideNavLinkClass} activeClass="active-nav-link" to="story" spy={true} smooth={false} offset={0} duration={50} onSetActive={this.handleSetActive}>
              story
            </Link>
            <Link className={asideNavLinkClass} activeClass="active-nav-link" to="perks" spy={true} smooth={false} offset={0} duration={50} onSetActive={this.handleSetActive}>
              perks
            </Link>
          </div>
        </aside>
        <div className="col camp-form-content" id="basics">
          {this.NavBar(this.props)}
          <nav className="secondary-nav">
            <div>Campaign / <a className="purple-text">{this.state.section}</a></div>
            <a>Preview</a>
            <a>Save Campaign</a>
            <span className="purple-button">Review & Launch</span>
          </nav>
          <div name="basics">
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
              <input onChange={this.update('title')} id="campaign-title" type="text" value={this.state.title}></input>
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-tagline">
                Campaign Tagline<span className="required" />
              </label>
              <legend className="session-errors">
                Provide a short description that best describes your campaign to your audience.
              </legend>
              <input onChange={this.update('tagline')} id="campaign-tagline" type="text" value={this.state.tagline}></input>
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
                onDrop={this.onImageDrop}
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
                <input style={{display: 'inline-block', width: '33%', marginRight: '15px'}} onChange={this.update('city')} placeholder="City" id="campaign-location-city" type="text" value={this.state.city}></input>
                <input style={{display: 'inline-block', width: '55%'}} onChange={this.update('country')} placeholder="Country" id="campaign-tagline" type="text" value={this.state.country}></input>
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
              <input onChange={this.update('duration')} id="campaign-duration" type="number" min="0" value={this.state.duration} />
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-goal">
                Fundraising Goal<span className="required" />
              </label>
              <legend className="session-errors">
                How much money would you like to raise for this campaign?
              </legend>
              <input onChange={this.update('goal')} id="campaign-goal" type="number" min="0" value={this.state.goal} />
            </div>
          </div>
        </div>
        <div className="col camp-form-content" id="story">
          <div name="story">
            <h1 className="form-header">Story</h1>
            <p>Introduce yourself, your background, your campaign and why it’s important to you.
              Express the magnitude of what contributors will help you achieve.
            </p>
            <div className="campaign-form-field">
              <label htmlFor="campaign-overview">
                Campaign Overview<span className="required" />
              </label>
              <legend className="session-errors">
                Lead with a compelling statement that describes your campaign and why it’s important to you, highlight key campaign features, and remember - keep it short!
              </legend>
              <textarea onChange={this.update('overview')} id="campaign-overview" type="text" value={this.state.overview} rows="4" cols="50"></textarea>
            </div>
            <div className="campaign-form-field">
              <label htmlFor="campaign-pitch">
                Campaign Pitch<span className="required" />
              </label>
              <legend className="session-errors">
                Tell potential contributors more about your campaign. Provide details that will motivate people to contribute. A good pitch is compelling, informative, and easy to digest.
              </legend>
              <textarea onChange={this.update('pitch')} id="campaign-pitch" type="text" value={this.state.pitch} rows="4" cols="50"></textarea>
            </div>
          </div>
        </div>
        <div className="col camp-form-content" id="perks">
          {perkOpenner}
          {perkForms}
          <div className="campaign-form-field">
            <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
              <a onClick={this.incrementPerks} className="purple-button">Add More Perks</a>
              <a onClick={this.handleSubmit()} className="pink-button">Launch Campaign</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CampaignForm;

// <Link className={asideNavLinkClass} activeClass="active-nav-link" to="basics" spy={true} smooth={false} offset={100} duration={50} onSetActive={this.handleSetActive}>
//   basics
// </Link>
// <Link className={asideNavLinkClass} activeClass="active-nav-link" to="story" spy={true} smooth={false} offset={50} duration={50} onSetActive={this.handleSetActive}>
//   story
// </Link>
// <Link className={asideNavLinkClass} activeClass="active-nav-link" to="perks" spy={true} smooth={false} duration={50} onSetActive={this.handleSetActive}>
//   perks
// </Link>
// <Link className={asideNavLinkClass} activeClass="active-nav-link" to="team" spy={true} smooth={false} duration={50} onSetActive={this.handleSetActive}>
//   team
// </Link>
// <Link className={asideNavLinkClass} activeClass="active-nav-link" to="funding" spy={true} smooth={false} duration={50} onSetActive={this.handleSetActive}>
//   funding
// </Link>
// <Link className={asideNavLinkClass} activeClass="active-nav-link" to="extra" spy={true} smooth={false} duration={50} onSetActive={this.handleSetActive}>
//   extra
// </Link>


// <a className={asideNavLinkClass} id="#team-l">team</a>
// <a className={asideNavLinkClass} id="#funding-l">funding</a>
// <a className={asideNavLinkClass} id="#-l">extra</a>
