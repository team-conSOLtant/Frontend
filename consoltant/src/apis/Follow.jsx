import { axios } from "./Axios";

export const getFollowing = async (userId) => {
  try {
    const response = await axios
      .get(`/follows/following?userId=${userId}`)
      .then((res) => {
        return res.data;
      });
    console.log("[IN AXIOS] get following response: ", response);
    return response;
  } catch (error) {
    console.log("get Following fail: ", error);
  }
};

export const getFollower = async (portfolioId) => {
  try {
    const response = await axios
      .get(`/follows/follower?portfolioId=${portfolioId}`)
      .then((res) => {
        return res.data;
      });
    console.log("[IN AXIOS] get follower response: ", response);
    return response;
  } catch (error) {
    console.log("get Follower fail: ", error);
  }
};

export const postFollows = async (userId, portfolioId) => {
  try {
    const response = await axios.post(`/follows`, { userId, portfolioId });
    console.log(
      "POST FOLLOWS POST FOLLOWS POST FOLLOWS POST FOLLOWS POST FOLLOWS POST FOLLOWS",
      response.data
    );
    return response.data;
  } catch (error) {
    console.error("post follows failed:", error);
    throw error;
  }
};

export const deleteFollows = async (followId) => {
  try {
    const response = await axios.post(`/follows/${followId}`);
    return response.data;
  } catch (error) {
    console.error("delete follows failed:", error);
    throw error;
  }
};
