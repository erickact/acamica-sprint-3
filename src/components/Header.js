import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import SwitchTheme from "./SwitchTheme";
import logoDesktopLigth from "../assets/logoDesktopLigth.svg";
import logoDesktopDark from "../assets/logoDesktopDark.svg";
import ilustraHeader from "../assets/ilustraHeader.svg";

const Header = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div>
      <div className="flex align-center header container">
        <img src={`${isDark ? logoDesktopDark : logoDesktopLigth}`} alt="" />
        <SwitchTheme />
      </div>

      <div className="container flex flex-column align-center">
        <h1
          className={`title text-center ${isDark ? "dark-font" : "ligth-font"}`}
        >
          ¡ Inspírate y busca los mejores <span>GIFS</span> !
        </h1>
        <img src={ilustraHeader} alt="" />
      </div>
    </div>
  );
};

export default Header;
