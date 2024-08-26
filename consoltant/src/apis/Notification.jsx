import { axios } from "./Axios";

export const getNotifications = async (userId) => {
  try {
    const response = await axios
      .get(`/notifications?userId=${userId}`)
      .then((res) => {
        return res.data;
      });
    return response;
  } catch (error) {
    console.error("get notificationn fail: ", error);
  }
};
