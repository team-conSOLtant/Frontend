import Axios from "axios"; // 인스턴스와 구분하기 위해 대문자 사용

const baseURL = "";
const baselocalURL = "http://localhost:8080";

const axios = Axios.create({
  // baseURL: baseURL,
});

export default axios;
