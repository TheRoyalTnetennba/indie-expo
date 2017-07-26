import merge from 'lodash/merge';

import { RECEIVE_SEARCH } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH:
      const campaigns = {};
      action.search.forEach(campaign => campaigns[campaign.id] = campaign);
      return merge({}, campaigns);
    default:
      return state;
  }
};

export default SearchReducer;
