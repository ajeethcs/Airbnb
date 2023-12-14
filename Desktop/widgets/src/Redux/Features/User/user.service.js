import httpAuth from '../../http-auth';

class UserService {
  usersByFilter(data) {
    return httpAuth.post('v1/users/search', data);
  }
  userById(userId) {
    return httpAuth.get(`v1/users/user/${userId}`);
  }
  createUser(details) {
    return httpAuth.post(`v1/users/user/`, details);
  }
  updateUser(userDetails) {
    return httpAuth.put(`v1/users/user/${userDetails.userId}`, userDetails);
  }
  deleteUser(userId) {
    return httpAuth.delete(`v1/users/user/${userId}`);
  }
}

export default new UserService();
