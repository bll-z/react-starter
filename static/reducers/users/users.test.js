import {chai, expect} from '../../utils/expect';
import types from '../../actions/users/constants';
import reducer from './users';
import defaultState from './defaultState';

describe('users reducer', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal({getUsersPending: false,
                getUsersFulfilled: false,
                getUsersRejected: false,
                getUsersError: null,
                users: null});
  });


  it(`should handle ${types.GET_USERS}_PENDING`, () => {
    expect(reducer(undefined, {'type': `${types.GET_USERS}_PENDING`}))
      .to.deep.equal({getUsersPending: true,
                 getUsersFulfilled: false,
                 getUsersRejected: false,
                 getUsersError: null,
                 users: null});
  });

  it(`should handle ${types.GET_USERS}_FULFILLED`, () => {
    let action = {'type': `${types.GET_USERS}_FULFILLED`, payload: 'payload'};
    expect(reducer(undefined, action))
      .to.deep.equal({getUsersPending: false,
                 getUsersFulfilled: true,
                 getUsersRejected: false,
                 getUsersError: null,
                 users: action.payload});
  });

  it(`should handle ${types.GET_USERS}_REJECTED`, () => {
    let action = {'type': `${types.GET_USERS}_REJECTED`, payload: 'payload'};
    expect(reducer(undefined, action))
      .to.deep.equal({getUsersPending: false,
                 getUsersFulfilled: false,
                 getUsersRejected: true,
                 getUsersError: action.payload,
                 users: null});
  });

  it(`should handle ${types.ACK_GET_USERS_ERROR}`, () => {
    expect(reducer(undefined, {'type': types.ACK_GET_USERS_ERROR}))
      .to.deep.equal({getUsersPending: false,
                 getUsersFulfilled: false,
                 getUsersRejected: false,
                 getUsersError: null,
                 users: null});
  });

});