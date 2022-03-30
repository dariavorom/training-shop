import {SHOW_ERROR, LOAD_PRODUCTS, REQUEST_PRODUCTS} from "./products.types";

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
        case REQUEST_PRODUCTS:
            return {...state, isLoading: true, isError: false}
        case LOAD_PRODUCTS:
            return {
                ...state, products: {
                    men: action.payload.men,
                    women: action.payload.women
                },
                isLoading: false,
                isError: false
            }
        case SHOW_ERROR:
            return {...state, isError: true, isLoading: false}
        default:
            return state
    }
}