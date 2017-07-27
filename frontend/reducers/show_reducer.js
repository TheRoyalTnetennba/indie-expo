import merge from 'lodash/merge';

import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';

const ShowCampaignReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGN:
      const showCampaign = action.campaign;
      return merge({}, {
        showCampaign,
      });
    default:
      return state;
  }
};

export default ShowCampaignReducer;
