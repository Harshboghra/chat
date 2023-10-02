// import  from "../../axios/axios";
import request from "../../axios/axios";
import { IAuth, ILogin } from "./auth.model";

class AuthService {
  ENDPOINT = "/auth";

  public async login(data: ILogin): Promise<any> {
    const url = `${this.ENDPOINT}/login`;
    const method = "POST";
    return request({ url, method, data }).then((res: any) => {
      return res.data;
    });
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
