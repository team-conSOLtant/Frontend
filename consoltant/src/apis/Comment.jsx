import { axios } from "./Axios";

export const getComments = async (portfolioId) => {
  try {
    const response = await axios.get(`/portfolio-comments`, {
      params: { portfolioId: portfolioId },
    });
    console.log("[IN AXIOS] comment response : ", response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("get comment failed:", error);
    throw error;
  }
};

export const postComment = async (portfolioId, userId, userName, comment) => {
  try {
    const response = await axios.post(`/portfolio-comments`, {
      portfolioId,
      userId,
      userName,
      comment,
    });
    console.log(
      "[IN POST AXIOS] post comment response : ",
      response.data.result
    );
    return response.data.result;
  } catch (error) {
    console.error("post comment failed:", error);
    throw error;
  }
};

export const putComment = async (portfolioCommentId, comment) => {
  try {
    const response = await axios.put(
      `/portfolio-comments/${portfolioCommentId}`,
      { comment }
    );
    console.log("[IN PUT AXIOS] put comment response : ", response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("put comment failed:", error);
    throw error;
  }
};

export const deleteComment = async (portfolioCommentId) => {
  try {
    const response = await axios.delete(
      `/portfolio-comments/${portfolioCommentId}`
    );
    console.log(
      "[IN DELETE AXIOS] delete comment response : ",
      response.data.result
    );
    return response.data.result;
  } catch (error) {
    console.error("delete comment failed:", error);
    throw error;
  }
};
