import Axios from "axios"; // 인스턴스와 구분하기 위해 대문자 사용
// import { store } from "../app/store";

const baseURL = "";
const baselocalURL = "http://localhost:8080";

const axios = Axios.create({
  // baseURL: baseURL,
});
axios.defaults.withCredentials = true;

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

export default axios;
