import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const SwitchTheme = () => {
  const { isDark, setTheme } = useContext(ThemeContext);

  return (
    <button
      className={`button-theme ${
        isDark
          ? "dark-font dark-background dark-border"
          : "ligth-font ligth-background purple-border button-hover"
      }`}
      onClick={() => setTheme(isDark ? "ligth" : "dark")}
    >
      {isDark ? "MODO LIGTH" : "MODO DARK"}
    </button>
  );
};

export default SwitchTheme;
