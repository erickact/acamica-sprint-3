import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import GifsItem from "./GifsItem";
import iconConfusion from "../assets/iconConfusion.svg";

const GifsList = ({ gifs }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`search text-center ${isDark ? "dark-font" : "ligth-font"}`}
      >
        Resultados de la búsqueda
      </div>

      {gifs.length ? (
        <div className="container">
          <div
            className={`gifs-list flex ${
              isDark ? "dark-gifs-list" : "ligth-gifs-list"
            }`}
          >
            {gifs.map((gif) => {
              return <GifsItem key={gif.slug} {...gif} />;
            })}
          </div>
        </div>
      ) : (
        <div className="message dark-font flex justify-center align-center flex-column">
          <img className="icon-confusion" src={iconConfusion} alt="" />
          <h1>Lo sentimos, no encontramos lo que buscas</h1>
          <h2>¡ Inténtalo de nuevo !</h2>
        </div>
      )}
    </div>
  );
};

export default GifsList;
