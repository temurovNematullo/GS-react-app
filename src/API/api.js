import axios from "axios";

export const mainsectionAPI = {
  getLocks() {
    return axios
      .get("https://67d7fa0c9d5e3a10152cd996.mockapi.io/locks")
      .then((response) => response.data);
  },
  getCategories(page, limit) {
    return axios
      .get("https://67d7fa0c9d5e3a10152cd996.mockapi.io/categories", {
        params: {
          page: page,
          limit: limit,
        },
      })
      .then((response) => response.data);
  },
};
