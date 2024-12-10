import reducer from "../reducers/reducer";
import { useReducer } from "react";
import { useContext } from "react";
import { HANDLE_FLIP, WARNING } from "../actions/actions";
import React from "react";
import data from "../data/tips.json"

const initialState = {
    tips: data.tips,
    flipStates: data.tips.map(()=>false)
}

const AppContext = React.createContext(null)

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleFlip = (index)=>{
        console.log(state)
        const today = new Date();
        const currentDay = today.getDate()
        if (index <= currentDay){
            dispatch({type:"HANDLE_FLIP", payload: index});
        } else {
            dispatch({type:"WARNING"})
        }
    }
    return (
        <AppContext.Provider value={{...state, handleFlip}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}