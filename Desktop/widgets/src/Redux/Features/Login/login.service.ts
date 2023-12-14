import httpCommon from "../../http-common";
import httpAuth from "../../http-auth";

class LoginService {
  userLogin(data:any) {
    return httpCommon.post("v1/users/auth/login", data);
  }
  userLogout() {
    return httpAuth.post("v1/users/auth/logout");
  }
}

export default new LoginService();