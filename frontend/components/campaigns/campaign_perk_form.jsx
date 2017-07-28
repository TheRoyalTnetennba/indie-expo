import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class PerkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      image_url: '',
    };
    this.cloudinaryPreset = 'indieexpo';
    this.cloudinaryURL = 'https://api.cloudinary.com/v1_1/dy4gcvjff/image/upload';
    this.updatePerk = this.updatePerk.bind(this);
    this.updateParent = this.props.updateParent.bind(this);
  }

  updatePerk() {
    return e => {
      const property = e.currentTarget.id.split('-')[1];
      const idx = e.currentTarget.id.split('-')[2];
      this.state[property] = e.currentTarget.value;
      const newPerkSlice = { [idx]: this.state };
      this.props.updateParent(idx, Object.assign(this.state))
    };
  }

  perkImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.perkImageUpload(files[0]);
  }

  perkImageUpload(file) {
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

  render() {
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
    return (
      <div key={`perkForm-${this.props.perkNum}`} >
        <div className="campaign-form-field">
          <label htmlFor={`perk-title-${this.props.perkNum}`}>
            Perk Title<span className="required" />
          </label>
          <legend className="session-errors">
            The title for your perk is what will appear on your campaign page and throughout Indiegogo.
            Create a title that best describes the contents of what this perk is offering.
          </legend>
          <input onChange={this.updatePerk()} id={`perk-title-${this.props.perkNum}`} type="text" value={this.state.title}></input>
        </div>
        <div className="campaign-form-field">
          <label htmlFor={`perk-description-${this.props.perkNum}`}>
            Description<span className="required" />
          </label>
          <legend className="session-errors">
            Describe the details of this perk. Be creative,
            this is your opportunity to educate backers on what they will be
            receiving after they claim this perk.
          </legend>
          <textarea onChange={this.updatePerk()} id={`perk-description-${this.props.perkNum}`} type="text" value={this.state.description} rows="4" cols="50"></textarea>
        </div>
        <div className="campaign-form-field">
          <label htmlFor={`perk-price-${this.props.perkNum}`}>
            Price<span className="required" />
          </label>
          <legend className="session-errors">
            Set an amount that you want to collect from backers who claim this perk.
            This amount should represent how much you want to receive for all the items included in this perk.
          </legend>
          <input onChange={this.updatePerk()} id={`perk-price-${this.props.perkNum}`} type="number" min="0" value={this.state.price}></input>
        </div>
        <div className="campaign-form-field">
          <label htmlFor={`perk-image-${this.props.perkNum}`}>
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
            onDrop={this.perkImageDrop.bind(this)}
            className="campaign-form-field-image">
            {imageBox}
          </Dropzone>
        </div>
      </div>
    );
  }

}

export default PerkForm;
