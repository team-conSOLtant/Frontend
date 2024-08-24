import { axios } from "./Axios";

// 로그인
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

// 로그아웃
export const logout = async () => {
  sessionStorage.removeItem("accessToken");
};

// 회원가입
export const register = async (info) => {
  try {
    // const status = "";
    const response = await axios.post("/auth/register", info).catch((error) => {
      if (error.response) {
        // console.log(error.response.data.message);
        // console.log(error.response.status);
      }
    });
    console.log(response);
    if (response) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("register fail:", error);
  }
};

// 대학정보 입력
export const registerAcademy = async (info) => {
  try {
    const response = await axios.post("/users/academy", info);
    console.log(response);
  } catch (error) {
    console.log("academy register fail:", error);
  }
};
