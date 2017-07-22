import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../common/component_helper';
import CampaignIndexItem from './campaign_index_item';

class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);
    this.NavBar = NavBar.bind(this);
    this.campaigns = [];
  }

  componentWillMount() {
    this.props.requestCampaigns();
  }

  componentWillReceiveProps(nextProps) {
    this.campaigns = Object.keys(nextProps.state.campaigns).map(idx => nextProps.state.campaigns[idx]);
  }

  render() {
    const campArray = this.campaigns.map(camp => <CampaignIndexItem campaign={camp} />);
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <section className="index-main-section">
          {campArray}
        </section>
      </div>
    );
  }
}

export default CampaignIndex;
