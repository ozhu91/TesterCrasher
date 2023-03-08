import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { changeLoginLS } from "../../hooks/auth";
import usersReducer from "./usersReducers";

export const usersActions = usersReducer.actions

export const getAuth=(login: string, pass: string):ThunkAction<void, RootState, unknown, AnyAction>=> {
    return (dispatch, getState) => {
        changeLoginLS(login)
        console.log(pass)
        console.log(localStorage.getItem("login"))
        const resName = "Oleg"
        const resAccess = "FullAccess" 
        dispatch(usersActions.setName(resName))
        dispatch(usersActions.setAccess(resAccess))
    }
}

export const getLogout=():ThunkAction<void, RootState, unknown, AnyAction>=> {
    return (dispatch, getstate) => {
        dispatch(usersActions.logout())
    }
}
