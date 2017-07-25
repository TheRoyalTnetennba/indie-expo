import * as APIUtil from '../utils/api_utils';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const requestCategories = () => dispatch => (
  APIUtil.fetchAllCategories().then(categories => (
    dispatch(receiveCategories(categories))
  ))
);
