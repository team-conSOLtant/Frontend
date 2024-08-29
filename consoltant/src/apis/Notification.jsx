import { axios } from "./Axios";

// 댓글 알림 불러오기
export const getCommentNotifications = async () => {
  try {
    const response = await axios
      .get(`/notifications/portfolio-comment`)
      .then((res) => {
        return res.data;
      });
    console.log("[IN AXIOS] get comment notification response: ", response);
    return response;
  } catch (error) {
    console.error("get comment notificationn fail: ", error);
  }
};

// 댓글 읽음 처리

export const readComment = async () => {
  try {
    const response = await axios
      .post(`/notifications/readall/portfolio-comment`)
      .then((res) => {
        return res.data;
      });
    console.log("[IN AXIOS] read comment notification response: ", response);
    return response;
  } catch (error) {
    console.error("read comment notificationn fail: ", error);
  }
};

// 선배 포트폴리오 매칭 알림 불러오기
export const getMatchingNotifications = async () => {
  try {
    const response = await axios
      .get(`/notifications/portfolio-matching`)
      .then((res) => {
        return res.data;
      });
    console.log("[IN AXIOS] get matching notification response: ", response);
    return response;
  } catch (error) {
    console.error("get matching notificationn fail: ", error);
  }
};
