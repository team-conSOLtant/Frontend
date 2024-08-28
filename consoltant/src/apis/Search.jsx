import { axios } from "./Axios";

export const getSearch = async (cursor, size, data) => {
  console.log("cursor", cursor);
  console.log("size", size);
  console.log("data", data);
  try {
    const response = await axios
      .post(`/portfolios/search?cursor=${cursor}&size=${size}`, data)
      .then((res) => {
        return res.data;
      });
    console.log("[IN AXIOS] get Search response: ", response);

    return response;
  } catch (error) {
    console.log("get Search failed:", error);
  }
};
