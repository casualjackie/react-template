import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  createContext,
  useContext,
  useMemo,
} from "react";
import { Helmet } from "react-helmet-async";
import { getLocalStorageItem, setLocalStorageItem } from "@utils/localStorage";
import { LIGHT_THEME, DARK_THEME } from "./theme.constants";
import type {
  ThemeColor,
  ThemeContext,
  ThemeProviderProps,
} from "./theme.types";

export const themeContext = createContext<ThemeContext>(undefined!);

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeColor>(LIGHT_THEME);

  const setDataAttrTheme = () => {
    if (document.documentElement && document.documentElement.dataset) {
      document.documentElement.dataset.theme = theme;
    }
  };

  useEffect(() => {
    const isOsDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const themeLocal = getLocalStorageItem<ThemeColor>("theme");
    const osMode = isOsDarkMode.matches ? DARK_THEME : LIGHT_THEME;
    setTheme(themeLocal || osMode);
  }, []);

  useLayoutEffect(() => {
    setDataAttrTheme();
  }, [theme]);

  const toggleTheme = useCallback((value: ThemeColor = LIGHT_THEME): void => {
    setTheme(value);
    setLocalStorageItem("theme", value);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <themeContext.Provider value={value}>
      {theme ? (
        <Helmet>
          <meta name="theme-color" content={theme} />
        </Helmet>
      ) : null}
      {props.children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useThemeContext hook should be used within ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
