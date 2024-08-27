import Axios from "axios"; // 인스턴스와 구분하기 위해 대문자 사용
// import { store } from "../app/store";

const baselocalURL = "http://70.12.246.186:8080/api";
const baseURL = "http://13.124.49.149:8080/api";

export const localAxios = Axios.create({
  // baseURL: testURL,
});


export const axios = Axios.create({
  baseURL: baseURL,
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
