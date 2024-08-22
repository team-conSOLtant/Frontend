import axios from "./Axios";

export const requestLogin = async ({ formData }) => {
  try {
    await axios
      .post("/auth/login", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((data) => {
        const { accessToken } = data;
        if (accessToken) {
          sessionStorage.setItem("accessToken", accessToken);
          console.log(accessToken);
          return true;
        }
      });
  } catch (error) {
    console.error("login failed:", error);
    throw error;
  }
};

export const logout = async () => {
  sessionStorage.removeItem("accessToken");
};
