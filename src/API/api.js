import axios from "axios";

const instance = axios.create({
  baseURL: "https://67d7fa0c9d5e3a10152cd996.mockapi.io/",
});

const instance2 = axios.create({
  baseURL: "https://67da449135c87309f52bb593.mockapi.io/",
});
const instance3 = axios.create({
  baseURL: "https://67e53b7418194932a5852bae.mockapi.io/",
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
  getPopularProduct() {
    return instance2.get("productcards").then((response) => response.data);
  },
};

export const catalogAPI = {
  getCatalogCards(page, limit, sortBy, order) {
    return instance2
      .get("catalogProductCards", {
        params: {
          page: page,
          limit: limit,
          sortBy: sortBy,
          order: order,
        },
      })
      .then((response) => response.data);
  },
  // getTotal() {
  //   return instance2
  //     .get("catalogProductCards")
  //     .then((response) => response.data[0].totalCount);
  // },
  getReviews(limit, page) {
    return instance3
      .get("reviews", {
        params: {
          limit: limit,
          page: page,
        },
      })
      .then((response) => response.data);
  },
  putCards(recentlyCard) {
    return instance3
      .post("recentlyViewed", recentlyCard)
      .then((response) => response.data);
  },
  getRecentlyViewed() {
    return instance3.get("recentlyViewed").then((response) => response.data);
  },

  postReview(reviewsData) {
    return instance3
      .post("reviews", reviewsData)
      .then((response) => response.data);
  },
};

export const charactericAPI = {
  getCharacteric() {
    return instance2
      .get("catalogProductCards")
      .then((response) => response.data)
      .catch((error) => {
        console.error("Ошибка в API-запросе:", error);
        throw error;
      });
  },
};
