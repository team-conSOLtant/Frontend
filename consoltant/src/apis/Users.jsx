import { axios } from "./Axios";

export const getUserInfo = async () => {
  try {
    const response = await axios.get(`/users`);
    console.log("[IN AXIOS] userInfo response : ", response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("get userInfo failed:", error);
    throw error;
  }
};
