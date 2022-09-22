import { useReducer } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ACTIONS = {
  CHANGE_COLOR: "change_color",
  CHANGE_MODE: "change_mode"
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_COLOR:
      return { ...state, color: action.payload };
    case ACTIONS.CHANGE_MODE:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { color: "#b5b5b5", mode: "dark" });

  const changeColor = (color) => {
    dispatch({
      type: ACTIONS.CHANGE_COLOR,
      payload: color,
    });
  };

  const changeMode = (mode) => {
    dispatch({
      type: ACTIONS.CHANGE_MODE,
      payload: mode,
    });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
