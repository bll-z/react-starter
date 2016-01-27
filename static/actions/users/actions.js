import {UserService} from "../../services";
import userConstants from './constants';

const actions = {
  getUsers: () => {
    return {
      type: userConstants.GET_USERS,
      payload: {
        promise: UserService.getUsers()
      }
    };
  },

  acknowledgeGetUsersError: () => {
    return {
      type: userConstants.ACK_GET_USERS_ERROR
    };
  }
};

export default { ...actions };