import Axios from "axios"; // 인스턴스와 구분하기 위해 대문자 사용
// import { store } from "../app/store";

const baseURL = "";
const baselocalURL = "http://localhost:8080/api";
const testURL = "http://13.124.49.149:8080/api";

export const localAxios = Axios.create({
  // baseURL: testURL,
});
// axios.defaults.withCredentials = true;

// axios.interceptors.request.use(
//   async (config) => {
//     const state = store.getState();
//     const user = state.user;
//     let accessToken = user?.token;

//     if (accessToken) {
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export const axios = Axios.create({
  baseURL: testURL,
  // timeout: 5000, // 5초 제한시간 설정
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
