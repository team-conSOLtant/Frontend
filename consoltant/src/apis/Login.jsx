import { axios } from "./Axios";

// 로그인
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

// 로그아웃
export const logout = async () => {
  sessionStorage.removeItem("accessToken");
};

// 회원가입
export const register = async (info) => {
  try {
    const response = await axios
      .post("/auth/register", info, { skipAuth: true })
      .catch((error) => {
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
    if (response) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log("academy register fail:", error);
  }
};

// 타입별 금융 상품 목록 불러오기
export const getProductList = async (type) => {
  try {
    console.log(type);
    const response = await axios.post("/products/bank/type", type, {
      skipAuth: true,
    });
    return response.data;
  } catch (error) {
    console.log("product list fail:", error);
  }
};

// 사용자 계좌 생성
export const createAccount = async (type, email) => {
  try {
    console.log(type);
    const response = await axios
      .post(`/users/${email}/create/account`, type, { skipAuth: true })
      .then((res) => {
        return res.data;
      });
    return response;
  } catch (error) {
    console.log("creating account fail:", error);
  }
};

// 1원 송금
export const issueAccount = async (accountInfo, email) => {
  try {
    const response = await axios
      .post(`/auth/${email}/issue/account`, accountInfo, { skipAuth: true })
      .then((res) => {
        return res.data;
      });
    return response;
  } catch (error) {
    console.log("sending 1won fail:", error);
  }
};

// 1원 송금 메시지 확인
export const checkMessage = async (accountInfo, email) => {
  try {
    console.log(accountInfo);
    const response = await axios
      .post(`/auth/${email}/check/message`, accountInfo)
      .then((res) => {
        return res.data;
      });
    return response;
  } catch (error) {
    console.log("Checking Message fail:", error);
  }
};

// 1원 송금 인증
export const checkAccount = async (checkInfo, email) => {
  try {
    console.log(checkInfo);
    const response = await axios
      .post(`/auth/${email}/check/account`, checkInfo)
      .then((res) => {
        return res.data;
      });
    return response;
  } catch (error) {
    console.log("checking account fail: ", error);
  }
};

// 계좌 정보 추가
export const createAccountInfo = async (info, email) => {
  try {
    const response = await axios
      .post(`/users/${email}/account`, info)
      .then((res) => {
        return res.data;
      });
    return response;
  } catch (error) {
    console.log("creating account info fail: ", error);
  }
};
