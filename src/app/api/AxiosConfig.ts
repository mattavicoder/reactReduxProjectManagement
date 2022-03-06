import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
});

const responseBody = (response: AxiosResponse) => response.data;

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    const { data, status } = error.response!;

    switch (status) {
      case 400:
        toast.error("Bad Request");
        break;
      case 401:
        toast.error("UnAuthorized");
        break;
      case 404:
        toast.error("Not Found");
        break;
      case 500:
        toast.error("Servre Error");
        break;
    }

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
