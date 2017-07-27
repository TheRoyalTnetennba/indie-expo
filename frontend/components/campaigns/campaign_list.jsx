import React from 'react';

import CampaignListItem from './campaign_list_item';
import { NavBar } from '../common/component_helper';
import Footer from '../common/footer';

class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    this.campaigns = [];
    this.NavBar = NavBar.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  isSearch() {
    if (this.props.match.params && this.props.match.params.search && this.props.match.params.search.length) {
      return true;
    }
    return false;
  }

  handleClick(id, e) {
    e.preventDefault();
    this.props.history.push(`/campaigns/${id}`)
  }

  componentWillMount() {
    if (this.isSearch()) {
      this.props.searchCampaigns(this.props.match.params.search);
    }
    this.props.requestCampaigns();
  }

  componentWillReceiveProps(nextProps) {
    if (this.isSearch()) {
      if (this.props.match.params.search !== nextProps.match.params.search) {
        this.props.searchCampaigns(nextProps.match.params.search);
      }
    } else {
      this.props.requestCampaigns();
    }
  }

  render() {
    let campArray;
    let campaigns;
    if (this.isSearch()) {
      campaigns = Object.keys(this.props.searchResults).map(idx => this.props.searchResults[idx]);
    } else {
      campaigns = Object.keys(this.props.campaigns).map(idx => this.props.campaigns[idx]);
    }
    campArray = campaigns.map(camp => <div onClick={e => this.handleClick(camp.id, e)} key={camp.id}><CampaignListItem campaign={camp} /></div>);
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <div className="campaign-list-div" data={this.props.state}>
          {campArray}
        </div>
        <Footer />
      </div>
    );
  }


}

export default CampaignList;
