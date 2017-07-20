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
