import WebpackImage from "@assets/images/webpack-logo.png";
import { useThemeContext } from "@styles/theme/theme.provider";

export const App = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <>
      <h1>Webpack</h1>
      <img src={WebpackImage} alt="logo" />
      <button onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}>
        button
      </button>
    </>
  );
};
