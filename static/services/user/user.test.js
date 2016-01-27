import {chai, expect} from '../../utils/expect';
import proxyquire from 'proxyquire';

const mockRequest = {
  default: null
};

const UserService = proxyquire('./user', {'../../utils/request': mockRequest}).default;


describe('user service', function() {

  describe('get users', function() {

    let successGood = (method, get) => Promise.resolve({body: 'SUCCESS'});
    let successBad = (method, get) => Promise.resolve('FAILURE');
    let fail = (method, get) => Promise.reject('FAILURE');

    it('return the response body when getUsers is called', () => {
      mockRequest.default = successGood;
      return expect(UserService.getUsers()).to.eventually.become('SUCCESS');
    });

    it('should throw an Error when the response doesn\'t have a body', () => {
      mockRequest.default = successBad;
      return expect(UserService.getUsers()).to.eventually.be.rejectedWith(Error);
    });

    it('should throw an Error when the promise is rejected', () => {
      mockRequest.default = fail;
      return expect(UserService.getUsers()).to.eventually.be.rejectedWith(Error);
    });

    after(()=>{mockRequest.default = null});

  });

});
