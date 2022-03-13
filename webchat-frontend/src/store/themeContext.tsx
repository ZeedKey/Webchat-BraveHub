import { createContext } from "react";
import { MainLightTheme } from "../components/Theme/Presets/main-light";

const defaultState = {
  MainLightTheme,
};

export const ThemeContext = createContext(defaultState);
