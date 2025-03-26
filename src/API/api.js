import axios from "axios";

const instance = axios.create({
  baseURL: "https://67d7fa0c9d5e3a10152cd996.mockapi.io/",
});

const instance2 = axios.create({
  baseURL: "https://67da449135c87309f52bb593.mockapi.io/",
});

export const mainsectionAPI = {
  getLocks() {
    return instance.get("locks").then((response) => response.data);
  },
  getCategories(page, limit) {
    return instance
      .get("categories", {
        params: {
          page: page,
          limit: limit,
        },
      })
      .then((response) => response.data);
  },
};

export const catalogAPI = {
  getCatalogCards(page, limit) {
    return instance2
      .get("catalogProductCards", {
        params: {
          page: page,
          limit: limit,
        },
      })
      .then((response) => response.data);
  },
  getTotal() {
    return instance2
      .get("catalogProductCards", {
        params: {
          fields: "id",
        },
      })
      .then((response) => response.data.length);
  },
};
