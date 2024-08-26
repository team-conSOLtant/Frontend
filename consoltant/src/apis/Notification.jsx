import { axios } from "./Axios";

export const getNotifications = async (userId) => {
  try {
    const response = await axios.get(`/notifications?userId=${userId}`).then((res) => {
      return res.data;
    });
    console.log("[IN AXIOS] get notification response: ", response);
    return response;
  } catch (error) {
    console.error("get notificationn fail: ", error);
  }
};
