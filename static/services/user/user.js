import request from '../../utils/request';

function _getUsers() {
  return request('GET', '/user_list').then((resp) => {
    if(!resp.hasOwnProperty('body')){
      throw new Error('Failed to fetch user list');
    }
    return resp.body;
  }, (err) => {
    throw new Error('Failed to fetch user list');
  });
}

export default class UserService {
  static getUsers() {
    return _getUsers();
  }
};
