import Axios from "axios"; // 인스턴스와 구분하기 위해 대문자 사용

const baselocalURL = "http://localhost:3000/";
const baseURL = "http://13.124.49.149:8080/api";

export const localAxios = Axios.create({
  baseURL: baselocalURL,
});
// axios.defaults.withCredentials = true;

export const axios = Axios.create({
  baseURL: baseURL,
});

axios.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
