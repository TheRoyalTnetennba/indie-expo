import * as APIUtil from '../utils/api_utils';

export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';

export const receiveCampaign = campaign => ({
  type: RECEIVE_CAMPAIGN,
  campaign,
});

export const receiveCampaigns = campaigns => ({
  type: RECEIVE_CAMPAIGNS,
  campaigns,
});

export const requestCampaigns = () => dispatch => (
  APIUtil.fetchAllCampaigns().then(campaigns => (
    dispatch(receiveCampaigns(campaigns))
  ))
);

export const requestCampaign = id => dispatch => (
  APIUtil.fetchCampaign(id).then(campaign => (
    dispatch(receiveCampaign(campaign))
  ))
);

export const searchCampaigns = string => dispatch => (
  APIUtil.searchCampaigns(string).then(campaigns => (
    dispatch(receiveCampaigns(campaigns))
  ))
);

export const newCampaign = campaign => dispatch => (
  APIUtil.createCampaign(campaign).then(createdCampaign => (
    dispatch(receiveCampaign(createdCampaign))
  ))
);

export const newContribution = contribution => dispatch => (
  APIUtil.sendContribution(contribution).then(campaign => (
    dispatch(receiveCampaign(campaign))
  ))
);
