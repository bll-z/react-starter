import proxyquire from 'proxyquire';
import {chai, expect} from '../../utils/expect';
import types from './constants'

const MockUserService = {getUsers: ()=> "SUCCESS" };
const MockServices = {
    UserService: MockUserService
};
const actions = proxyquire('./actions', {'../../services': MockServices}).default;

describe('getUsers', () => {

    let result = actions.getUsers();

    it('should create an action to get the users', () => {
        expect(result.type).to.equal(types.GET_USERS);
    });

    it('should call UserService.getUsers', function() {
        expect(result.payload.promise).to.equal(MockUserService.getUsers());
    });

});

