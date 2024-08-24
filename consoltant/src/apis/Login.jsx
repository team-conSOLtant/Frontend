import { axios } from "./Axios";

export const requestLogin = async (form) => {
  try {
    const response = await axios.post("/login", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const accessToken = response.headers.authorization.split(" "); // response.data에서 accessToken 추출
    if (accessToken) {
      sessionStorage.setItem("accessToken", accessToken[1]);
      return true;
    } else {
      console.error("로그인 실패: accessToken이 없습니다.");
      return false;
    }
  } catch (error) {
    console.error("login failed:", error);
    return false;
  }
};

export const logout = async () => {
  sessionStorage.removeItem("accessToken");
};

export const register = async (info) => {
  try {
    // const status = "";
    const response = await axios.post("/auth/register", info).catch((error) => {
      if (error.response) {
        console.log(error.response.data.message);
        console.log(error.response.status);
      }
    });
    if (response) {
      return true;
    } else {
      return false;
    }
    console.log(response);
  } catch (error) {
    console.log("register fail:", error);
  }
};
