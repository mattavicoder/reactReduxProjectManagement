import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
});

const responseBody = (response: AxiosResponse) => response.data;

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const AxiosRequests = {
  get: <T>(url: string) => axiosInstance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axiosInstance.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) =>
    axiosInstance.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axiosInstance.delete<T>(url).then(responseBody),
};

export default AxiosRequests;
