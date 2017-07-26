import * as APIUtil from '../utils/api_utils';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = search => ({
  type: RECEIVE_SEARCH,
  search,
});

export const requestCampaigns = () => dispatch => (
  APIUtil.fetchAllCampaigns().then(search => (
    dispatch(receiveSearch(search))
  ))
);

export const searchCampaigns = string => dispatch => (
  APIUtil.searchCampaigns(string).then(search => (
    dispatch(receiveSearch(search))
  ))
);
