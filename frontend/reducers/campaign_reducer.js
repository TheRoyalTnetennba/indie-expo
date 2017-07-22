import merge from 'lodash/merge';

import { RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN } from '../actions/campaign_actions';

const CampaignReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGN:
      const showCampaign = action.campaign;
      return merge({}, {
        showCampaign,
      });
    case RECEIVE_CAMPAIGNS:
      const campaigns = action.campaigns;
      return merge({}, state, {
        campaigns,
      });
    default:
      return state;
  }
};

export default CampaignReducer;
