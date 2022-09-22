import { useReducer } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ACTIONS = {
  CHANGE_COLOR: "change_color",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { color: "#b5b5b5" });

  const changeColor = (color) => {
    dispatch({
      type: ACTIONS.CHANGE_COLOR,
      payload: color,
    });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
