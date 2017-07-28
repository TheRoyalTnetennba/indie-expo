export const login = credentials => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: credentials,
  })
);

export const signup = info => (
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: info,
  })
);

export const logout = () => (
  $.ajax({
    url: 'api/session',
    method: 'DELETE',
  })
);

export const guestLogin = () => (
  $.ajax({
    url: 'api/session/guest_user',
    method: 'GET',
  })
);

export const fetchAllCampaigns = () => (
  $.ajax({
    url: '/api/campaigns',
    method: 'GET',
  })
);

export const fetchCampaign = id => (
  $.ajax({
    url: `/api/campaigns/${id}`,
    method: 'GET',
  })
);

export const fetchAllCategories = () => (
  $.ajax({
    url: '/api/categories',
    method: 'GET',
  })
);

export const searchCampaigns = string => (
  $.ajax({
    url: `/api/campaigns/search/${string}`,
    method: 'GET',
  })
);

export const createCampaign = campaign => (
  $.ajax({
    url: 'api/campaigns',
    method: 'POST',
    data: campaign,
  })
);

export const createPerk = perk => (
  $.ajax({
    url: 'api/perks',
    method: 'POST',
    data: perk,
  })
);

export const sendContribution = contribution => (
  $.ajax({
    url: 'api/contributions',
    method: 'POST',
    data: contribution,
  })
);

export const fetchUser = user => (
  $.ajax({
    url: `/api/users/${user}`,
    method: 'GET',
  })
);
