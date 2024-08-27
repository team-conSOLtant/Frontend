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
