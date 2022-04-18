import * as types from "./types";

const initialState = {
    products: {
        men: [],
        women: [],
    },
    isLoading: false,
    isError: false
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_PRODUCTS:
            return {...state, isLoading: true, isError: false}
        case types.LOAD_PRODUCTS:
            return {
                ...state, products: {
                    men: action.payload.men,
                    women: action.payload.women
                },
                isLoading: false,
                isError: false
            }
        case types.SHOW_ERROR:
            return {...state, isError: true, isLoading: false}
        default:
            return state
    }
}