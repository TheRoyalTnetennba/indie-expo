import React from 'react';

import CampaignListItem from './campaign_list_item';
import { NavBar } from '../common/component_helper';
import Footer from '../common/footer';

class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    this.campaigns = [];
    this.NavBar = NavBar.bind(this);
  }

  isSearch() {
    if (this.props.match.params && this.props.match.params.search && this.props.match.params.search.length) {
      return true;
    }
    return false;
  }

  componentWillMount() {
    if (this.isSearch()) {
      this.props.searchCampaigns(this.props.match.params.search);
    }
    this.props.requestCampaigns();
  }

  componentWillReceiveProps(nextProps) {
    if (this.isSearch()) {
      this.campaigns = Object.keys(nextProps.state.searchResults).map(idx => nextProps.state.searchResults[idx]);
    } else {
      this.campaigns = Object.keys(nextProps.state.campaigns).map(idx => nextProps.state.campaigns[idx]);
    }
  }

  render() {
    const campArray = this.campaigns.map(camp => <CampaignListItem key={camp.id} campaign={camp} />);
    return (
      <div className="index-main-div">
        <header>
          {this.NavBar(this.props)}
        </header>
        <div className="campaign-list-div">
          {campArray}
        </div>
        <Footer />
      </div>
    );
  }


}

export default CampaignList;
