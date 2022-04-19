import * as types from './types';
import {addItemToCart, removeItemFromCart, incItemInCart, decItemInCart, onChangeInput} from './utils';
import {InitialValues} from "../../components/cart/formModel/initialValues";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    order: {
        activeStep: 0,
        orderComplete: false,
        orderError: false,
        errorMessage: '',
        orderValues: InitialValues,
    },
    countries: {
        countriesList: [],
        isRequestSuccess: false,
        isRequestError: false
    },
    cities: {
        citiesList: [],
        isRequestSuccess: false,
        isRequestError: false
    }
}
export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.IS_CART_OPEN:
            return {...state,
                isCartOpen: action.payload,
                order: {...state.order, orderComplete: false, orderError: false, activeStep: 0, orderValues: InitialValues},
                cities: {...state.cities, citiesList: []}
            }
        case types.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                order: {...state.order, processingOrder: true}
            }
        case types.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case types.REMOVE_ALL_ITEMS:
            return {
                ...state,
                cartItems: []
            }
        case types.INC_ITEM:
            return {
                ...state,
                cartItems: incItemInCart(state.cartItems, action.payload)
            }
        case types.DEC_ITEM:
            return {
                ...state,
                cartItems: decItemInCart(state.cartItems, action.payload)
            }
        case types.ON_CHANGE_INPUT:
            return {
                ...state,
                cartItems: onChangeInput(state.cartItems, action.payload)
            }
        case types.ACTIVE_STEP:
            return {
                ...state,
                order: {...state.order, activeStep: action.payload, orderComplete: false, orderError: false}
            }
        case types.ORDER_COMPLETE:
            return {
                ...state,
                order: {...state.order,
                    orderComplete: true,
                    orderError: false,
                    orderValues: InitialValues},
            }
        case types.ORDER_ERROR:
            return {
                ...state,
                order: {...state.order, orderComplete: false, orderError: true, errorMessage: action.payload}
            }
        case types.ORDER_VALUES:
            return {
                ...state,
                order: {...state.order, orderValues: action.payload}
            }
        case types.LOAD_COUNTRIES: {
            return {
                ...state,
                countries: {...state.countries, countriesList: action.payload}
            }
        }
        case types.IS_REQUEST_COUNTRIES_SUCCESS: {
            return {
                ...state,
                countries: { ...state.countries, isRequestSuccess: true, isRequestError: false}
            }
        }
        case types.IS_REQUEST_COUNTRIES_ERROR: {
            return {
                ...state,
                countries: { ...state.countries, isRequestSuccess: false, isRequestError: true}
            }
        }
        case types.SEND_CITIES_REQUEST: {
            return {
                ...state,
                cities: { ...state.cities, citiesList: []}
            }
        }
        case types.SEND_CITIES_SUCCESS: {
            return {
                ...state,
                cities: { ...state.cities, isRequestSuccess: true, isRequestError: false}
            }
        }
        case types.SEND_CITIES_ERROR: {
            return {
                ...state,
                cities: { ...state.cities, isRequestSuccess: false, isRequestError: true}
            }
        }
        case types.SEND_CITIES_RESPONSE: {
            return {
                ...state,
                cities: { ...state.cities, citiesList: action.payload}
            }
        }
        case types.RESET_CITIES: {
            return {
                ...state,
                cities: { ...state.cities, citiesList: []}
            }
        }
        default:
            return state;
    }
}
