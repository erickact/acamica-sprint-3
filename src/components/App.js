import { useState, useContext } from "react";
import { ThemeContext } from "../context/theme";
import SearchForm from "./SearchForm";
import Header from "./Header";
import GifsList from "./GifsList";
import Loader from "./Loader";
import "../style.css";

function App() {
  const { isDark } = useContext(ThemeContext);

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={`app ${isDark ? "dark-background" : ""}`}>
      <Header />

      <SearchForm setGifs={setGifs} setIsLoading={setIsLoading} />
      
      {isLoading ? <Loader /> : <GifsList gifs={gifs} />}
    </div>
  );
}

export default App;
