const url = "https://nc-games-bib6.onrender.com/api";

export const getReviews = () => {
    return fetch(url + "/reviews").then((res) => res.json());
}