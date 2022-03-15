import CartActionTypes from './cart.types';

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItemById = (id, color, sizes, image) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: [id, color, sizes, image]
});
export const incItem = (id, color, sizes, image) => ({
    type: CartActionTypes.INC_ITEM,
    payload: [id, color, sizes, image]
})
export const decItem = (id, color, sizes, image) => ({
    type: CartActionTypes.DEC_ITEM,
    payload: [id, color, sizes, image]
})
export const onChangeInput = (id, color, sizes, image, quantity) => ({
    type: CartActionTypes.ON_CHANGE_INPUT,
    payload: [id, color, sizes, image, quantity]
})