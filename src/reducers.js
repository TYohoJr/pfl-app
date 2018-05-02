import { combineReducers } from 'redux';
// import React from "react";

const userOrderCartReducer = (state, action) => {
    if (!state) {
        state = {
            userCartArray: []
        }
    }
    switch (action.type) {
        case "addItemToCart":
            return state = {
                userCartArray: action.userCartArray
            }
        default:
            return {
                ...state
            }
    }
}

const userDetailsReducer = (state, action) => {
    if (!state) {
        state = {
            username: "",
            password: "",
            verifyPassword: ""
        }
    }
    switch (action.type) {
        case "onUsernameChange":
            return state = {
                ...state,
                username: action.username
            }
        case "onPasswordChange":
            return state = {
                ...state,
                password: action.password
            }
        case "onVerifyPasswordChange":
            return state = {
                ...state,
                verifyPassword: action.verifyPassword
            }
        default:
            return {
                ...state
            }
    }
}

export default combineReducers({
    userDetailsReducer: userDetailsReducer,
    userOrderCartReducer: userOrderCartReducer
});
