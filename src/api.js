const url = "https://nc-games-bib6.onrender.com/api";

const fetchAndRetrieve = (endpoint) => {
  return fetch(url + endpoint).then((res) => res.json());
};

export const getReviews = () => fetchAndRetrieve("/reviews");

export const getSingleReview = (id) => fetchAndRetrieve(`/reviews/${id}`);
