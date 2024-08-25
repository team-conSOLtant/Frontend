import { axios } from "./Axios";

export const requestLogin = async (form) => {
  try {
    const response = await axios.post("/login", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const accessToken = response.headers.authorization.split(" "); // response.data에서 accessToken 추출
    // console.log("login response header : ", response.headers.loginid);
    if (accessToken) {
      sessionStorage.setItem("accessToken", accessToken[1]);
      // loginid를 store에 저장해야 하는데 function component 내에서 dispatch와 Selector를 불러오는 것을 권장하기 떄문에
      // loginid를 반환하여 page나 컴포넌트 내에서 slice에 저장할 예정이다.
      return response.headers.loginid;
    } else {
      console.error("로그인 실패: accessToken이 없습니다.");
      return null;
    }
  } catch (error) {
    console.error("login failed:", error);
    return null;
  }
};

export const logout = async () => {
  sessionStorage.removeItem("accessToken");
};
