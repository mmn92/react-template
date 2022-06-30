import axios from "axios";
import { BASE_URL } from "../constants/api";

const AxiosClient = axios.create({ baseURL: BASE_URL });

AxiosClient.interceptors.request.use((req) => {
  return req;
});

AxiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default AxiosClient;
