import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../common/component_helper';

class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      goal: '',
      image_url: '',
    };
    this.NavBar = NavBar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <section>
          <h1>Index</h1>
        </section>
      </div>
    );
  }
}

export default CampaignIndex;
