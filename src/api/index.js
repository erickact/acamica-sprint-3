import { GIPHY_AUTOCOMPLETE_URL } from "../constants";

const getGifs = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getSuggestions = async (term) => {
  try {
    const res = await fetch(`${GIPHY_AUTOCOMPLETE_URL}&q=${term}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error();
  }
};

const api = {
  getGifs,
  getSuggestions,
};
export default api;
