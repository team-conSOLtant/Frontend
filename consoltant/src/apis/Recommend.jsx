import { axios } from "./Axios";

export const getCurrentRecommend = async () => {
  try {
    const result = await axios.get("/recommends/year").then((res) => {
      return res.data;
    });
    console.log("[IN AXIOS] current recommend response: ", result);
    return result;
  } catch (error) {
    console.log("get current recommend failed:", error);
  }
};

export const postRecommendList = async (data) => {
  try {
    const result = await axios
      .post("/recommends/list", { recommend: data })
      .then((res) => {
        return res.data;
      });
    return result;
  } catch (error) {
    console.log("post recommendList failed:", error);
  }
};
