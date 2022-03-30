import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart, incItemInCart, decItemInCart, onChangeInput } from './cart.utils';

const INITIAL_STATE = {
    cartItems: []
}
export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.INC_ITEM:
            return {
                ...state,
                cartItems: incItemInCart(state.cartItems, action.payload)
            }
        case CartActionTypes.DEC_ITEM:
            return {
                ...state,
                cartItems: decItemInCart(state.cartItems, action.payload)
            }
        case CartActionTypes.ON_CHANGE_INPUT:
            return {
                ...state,
                cartItems: onChangeInput(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}
