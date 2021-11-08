import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/theme";
import { GIPHY_TRENDING_URL } from "../constants/index";
import { GIPHY_SEARCH_URL } from "../constants/index";
import api from "../api";
import iconSearch from "../assets/iconSearch.svg";
import iconSearchLigth from "../assets/iconSearchLigth.png";
import iconClose from "../assets/iconClose.svg";

const SearchForm = ({ setGifs, setIsLoading }) => {
  const { isDark } = useContext(ThemeContext);

  const [term, setTerm] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const getGifs = async () => {
    setIsLoading(true);

    try {
      const response = await api.getGifs(GIPHY_TRENDING_URL);
      const { data } = response;
      setGifs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGifs();
  }, []);

  const handleOnChange = (e) => {
    setTerm(e.target.value);
    setIsTyping(true);
  };

  const handleOnClickSuggestion = (name) => {
    setTerm(name);
    setIsTyping(false);
    setSuggestions([]);
  };

  const handleCleanUp = () => {
    setTerm("");
    setIsTyping(false);
    getGifs();
    setSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuggestions([]);
    setIsLoading(true);

    try {
      const response = await api.getGifs(`${GIPHY_SEARCH_URL}&q=${term}`);
      const { data } = response;
      setGifs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isTyping) {
      const getSuggestions = async () => {
        try {
          const response = await api.getSuggestions(term);
          const { data } = response;
          setSuggestions(data);
        } catch (error) {
          console.error(error);
        }
      };

      getSuggestions();
    }
  }, [term, isTyping]);

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="relative">
        {term.length ? (
          <button type="button" onClick={handleCleanUp}>
            <img className="icon-Close" src={iconClose} alt="" />
          </button>
        ) : null}

        <input
          className={`input ${
            isDark ? "dark-background dark-border dark-font" : "black-border"
          }`}
          type="text"
          id="term"
          placeholder="Buscar gif"
          autoComplete="off"
          value={term}
          onChange={handleOnChange}
        />

        {suggestions.length ? (
          <div className="suggestions">
            <ul className="suggestions-list">
              {suggestions.map((suggestion) => (
                <li key={suggestion.name}>
                  <button
                    type="button"
                    onClick={() => handleOnClickSuggestion(suggestion.name)}
                    className="suggestions-button"
                  >
                    <img className="icon-search" src={iconSearchLigth} alt="" />
                    {suggestion.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <button className="button-search" type="submit">
        <img src={iconSearch} alt="" />
      </button>
    </form>
  );
};

export default SearchForm;
