import Axios from "axios"; // 인스턴스와 구분하기 위해 대문자 사용
// import { store } from "../app/store";

const baseSWlocalURL = "https://70.12.246.186:8080/api";
const baseDYlocalURL = "https://70.12.108.65:8080/api";
const baseDYHomelocalURL = "https://192.168.1.109:8080/api";
const baseURL = "http://13.124.49.149:8080/api";
const eztaja = "https://easy-taza.site/api";

export const localAxios = Axios.create({
  // baseURL: baselocalURL,
});

export const axios = Axios.create({
  baseURL: eztaja,
});

axios.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      console.log("Error : no accessToken");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// export default axios;
