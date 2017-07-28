import * as APIUtil from '../utils/api_utils';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const requestUser = user => dispatch => (
  APIUtil.fetchUser(user).then(userInfo => (
    dispatch(receiveUser(userInfo))
  ))
);
