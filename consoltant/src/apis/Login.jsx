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
    const response = await axios.post("/auth/register", info, { skipAuth: true }).catch((error) => {
      if (error.response) {
        console.log(error.response.data.message);
        console.log(error.response.status);
      }
    });
    console.log(response);
    if (response) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log("register fail:", error);
  }
};

// 학력 정보 추가
export const registerAcademy = async (form, state) => {
  try {
    console.log(form.get("subject"));
    console.log(state);
    const response = await axios.post(`/users/${state}/academy`, form, {
      headers: { "Content-Type": "multipart/form-data" },
      skipAuth: true,
    });
    // console.log(response.data);
    if (response) {
      // console.log(response.data);
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log("academy register fail:", error);
  }
};
