import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Link } from 'react-router-dom';

import { NavBar } from '../common/component_helper';

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
    };
    this.categories = [];
    this.NavBar = NavBar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.requestCategories = this.props.requestCategories.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
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

  componentWillMount() {
    this.props.requestCategories();
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

  render() {
    const CLOUDINARY_UPLOAD_PRESET = 'indieexpo';
    const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dy4gcvjff/image/upload';
    const categories = this.categories.map(cat => <option key={cat.id} value={cat.title}>{cat.title}</option>);
    return (
      <div className="cf campaign-form-main-div">
        <aside className="col col-1-4">
          <div className="annotation-pill-yellow">DRAFT CAMPAIGN</div>
          <p style={{textTransform: 'uppercase', color: '#C8C8C8'}}>{this.state.title}</p>
        </aside>
        <div className="col camp-form-content">
          {this.NavBar(this.props)}
          <nav className="secondary-nav">
            <div>Campaign / <a className="purple-text">{this.state.section}</a></div>
            <a>Preview</a>
            <a>Save Campaign</a>
            <span className="purple-button">Review & Launch</span>

          </nav>
          <div>
            <h1 id="basics">Basics</h1>
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
                <div className="campaign-form-field-image-label">
                  <i className="fa fa-camera camera-circle" aria-hidden="true" />
                  <a>UPLOAD IMAGE</a>
                </div>
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
              <input onChange={this.update('duration')} id="campaign-duration" type="number" value={this.duration}></input>
              <div className="purple-next-button">Next</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CampaignForm;
