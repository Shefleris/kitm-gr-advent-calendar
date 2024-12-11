import React, { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducers/reducer";
import { HANDLE_FLIP, WARNING, HANDLE_THEME } from "../actions/actions";
import data from "../data/tips.json";

// Uzloadina tipsus jei yra data
const storedTips = JSON.parse(localStorage.getItem("tips"));
const storedFlipStates = JSON.parse(localStorage.getItem("flipStates"));

const initialState = {
  tips: storedTips || data.tips,
  flipStates: storedFlipStates || data.tips.map(() => false),
  themeState: 'light-mode'
};

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFlip = (index) => {
    const today = new Date();
    const currentDay = today.getDate();

    if (index < currentDay) {
      dispatch({ type: HANDLE_FLIP, payload: index });
    } else {
      dispatch({ type: WARNING });
    }
  };

  const handleTheme = () => {
    dispatch({type: HANDLE_THEME})
  }

  //Issaugo tipsus i local storage
  useEffect(() => {
    localStorage.setItem("tips", JSON.stringify(state.tips));
    localStorage.setItem("flipStates", JSON.stringify(state.flipStates));
  }, [state.tips, state.flipStates]);

  return (
    <AppContext.Provider value={{ ...state, handleFlip, handleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };