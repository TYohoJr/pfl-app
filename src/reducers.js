import { combineReducers } from 'redux';

// This is the store of all the Redux reducers

// Reducer of all the info that is in the users cart
const userOrderCartReducer = (state, action) => {
    if (!state) {
        state = {
            productNameArray: [],
            productInfoArray: []
        }
    }
    switch (action.type) {
        case "addItemToCart":
            return state = {
                productNameArray: action.productNameArray,
                productInfoArray: action.productInfoArray
            }
        case "clearOrderCart":
            return state = {
                productNameArray: [],
                productInfoArray: []
            }
        default:
            return {
                ...state
            }
    }
}

// Reducer of all the user details they input in the form in UserCheckoutModal.js
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
            phone: "",
            orderReference: ""
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
        case "onOrderReferenceChange":
            return state = {
                ...state,
                orderReference: action.orderReference
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
