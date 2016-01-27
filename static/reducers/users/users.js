import _ from 'lodash';

import userConstants from '../../actions/users/constants';
import defaultState from './defaultState';

/*
 * @function post
 * @description This reducer holds the state of a post after it is fetched
 * from the server.
 * @param {object} state The previous state
 * @param {object} action The dispatched action
 * @returns {object} state The updated state
 */
export default function users(state = defaultState, action) {
  switch (action.type) {
    case `${userConstants.GET_USERS}_PENDING`:
      return _.assign({}, {
        ...state,
        getUsersPending: true,
        getUsersFulfilled: false,
        getUsersRejected: false,
        getUsersError: null,
        users: null
      });

    case `${userConstants.GET_USERS}_FULFILLED`:
      return _.assign({}, {
        ...state,
        getUsersPending: false,
        getUsersFulfilled: true,
        users: action.payload
      });

    case `${userConstants.GET_USERS}_REJECTED`:
      return _.assign({}, {
        ...state,
        getUsersPending: false,
        getUsersRejected: true,
        getUsersError: action.payload
      });

    case userConstants.ACK_GET_USERS_ERROR:
      return _.assign({}, {
        ...state,
        getUsersRejected: false,
        getUsersError: null
      });

    default: return state;
  }
}