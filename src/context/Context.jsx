import reducer from "../reducers/reducer";
import { useReducer } from "react";
import { useContext } from "react";
import { HANDLE_FLIP, WARNING } from "../actions/actions";
import React from "react";

const tempData = [
        {day:1, tip: 'this is a test'},
        {day:2, tip: 'this is a second test'},
        {day:3, tip: 'this is a test'},
        {day:4, tip: 'this is a second test'},
        {day:5, tip: 'this is a test'},
        {day:6, tip: 'this is a second test'},
        {day:7, tip: 'this is a test'},
        {day:8, tip: 'this is a second test'},
        {day:9, tip: 'this is a test'},
        {day:10, tip: 'this is a second test'},
        {day:11, tip: 'this is a test'},
        {day:12, tip: 'this is a second test'},
        {day:13, tip: 'this is a test'},
        {day:14, tip: 'this is a second test'},
    ]
const initialState = {
    tips: tempData,
    flipStates: tempData.map(()=>false)
}

console.log(initialState)

const AppContext = React.createContext(null)

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleFlip = (index)=>{
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