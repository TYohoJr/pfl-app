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
            firstName: "",
            lastName: "",
            companyName: "",
            addressOne: "",
            addressTwo: "",
            city: "",
            userState: "",
            postalCode: "",
            countryCode: "",
            email: "",
            phone: ""
        }
    }
    switch (action.type) {
        case "onFirstNameChange":
            return state = {
                ...state,
                firstName: action.firstName
            }
        case "onLastNameChange":
            return state = {
                ...state,
                lastName: action.lastName
            }
        case "onCompanyNameChange":
            return state = {
                ...state,
                companyName: action.companyName
            }
        case "onAddressOneChange":
            return state = {
                ...state,
                addressOne: action.addressOne
            }
        case "onAddressTwoChange":
            return state = {
                ...state,
                addressTwo: action.addressTwo
            }
        case "onCityChange":
            return state = {
                ...state,
                city: action.city
            }
        case "onStateChange":
            return state = {
                ...state,
                userState: action.userState
            }
        case "onPostalCodeChange":
            return state = {
                ...state,
                postalCode: action.postalCode
            }
        case "onCountryCodeChange":
            return state = {
                ...state,
                countryCode: action.countryCode
            }
        case "onEmailChange":
            return state = {
                ...state,
                email: action.email
            }
        case "onPhoneChange":
            return state = {
                ...state,
                phone: action.phone
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
