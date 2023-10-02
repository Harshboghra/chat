// import  from "../../axios/axios";
import request from "../../axios/axios";
// import { IAuth, ILogin } from "./auth.model";

class UserService {
  ENDPOINT = "/user";

  public async current(): Promise<any> {
    const url = `${this.ENDPOINT}/current`;
    const method = "GET";
    return request({ url, method }).then((res: any) => {
      return res.data;
    });
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
