import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:4000", // url = base url + request url
  timeout: 1 * 60 * 1000, // 1 minute
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    Accept: "application/json",
  },
  // withCredentials: true,
});

export default request;
