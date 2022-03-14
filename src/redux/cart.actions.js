import CartActionTypes from './cart.types';

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItemById = id => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: id
});
export const incItem = id => ({
    type: CartActionTypes.INC_ITEM,
    payload: id
})
export const decItem = id => ({
    type: CartActionTypes.DEC_ITEM,
    payload: id
})
export const onChangeInput = (id, quantity) => ({
    type: CartActionTypes.ON_CHANGE_INPUT,
    payload: [id, quantity]
})