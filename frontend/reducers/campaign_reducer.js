import merge from 'lodash/merge';

import { RECEIVE_CAMPAIGNS } from '../actions/campaign_actions';

const CampaignReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGNS:
      const campaigns = {};
      action.campaigns.forEach(campaign => campaigns[campaign.id] = campaign);
      return merge({}, state, campaigns);
    default:
      return state;
  }
};

export default CampaignReducer;
