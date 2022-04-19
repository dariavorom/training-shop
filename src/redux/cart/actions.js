import * as types from './types';

export const toggleCartOpen = (bool) => ({
    type: types.IS_CART_OPEN,
    payload: bool
})
export const addItem = item => ({
    type: types.ADD_ITEM,
    payload: item
});
export const removeItemById = (id, color, sizes, image) => ({
    type: types.REMOVE_ITEM,
    payload: [id, color, sizes, image]
});
export const removeAllItems = () => ({
    type: types.REMOVE_ALL_ITEMS,
});
export const incItem = (id, color, sizes, image) => ({
    type: types.INC_ITEM,
    payload: [id, color, sizes, image]
})
export const decItem = (id, color, sizes, image) => ({
    type: types.DEC_ITEM,
    payload: [id, color, sizes, image]
})
export const onChangeInput = (id, color, sizes, image, quantity) => ({
    type: types.ON_CHANGE_INPUT,
    payload: [id, color, sizes, image, quantity]
})

export const setOrderFormStep = (num) => {
    return {
        type: types.ACTIVE_STEP,
        payload: num
    }
}

export const sendOrderRequest = (data) => {
    return {
        type: types.SEND_ORDER_REQUEST,
        payload: data
    }
}
export const orderComplete = () => ({
    type: types.ORDER_COMPLETE
})
export const orderError = (message) => ({
    type: types.ORDER_ERROR,
    payload: message
})
export const setOrderValues = (fields) => ({
    type: types.ORDER_VALUES,
    payload: fields
})
export const sendCountriesRequest = () => ({
    type: types.SEND_COUNTRIES_REQUEST
})
export const loadCountries = (counties) => ({
    type: types.LOAD_COUNTRIES,
    payload: counties
})
export const isRequestCountriesSuccess = () => ({
    type: types.IS_REQUEST_COUNTRIES_SUCCESS
})
export const isRequestCountriesError= () => ({
    type: types.IS_REQUEST_COUNTRIES_ERROR
})

export const sendCitiesRequest = (data) => {
    return {
        type: types.SEND_CITIES_REQUEST,
        payload: data
    }
}
export const sendCitiesSuccess = () => {
    return {
        type: types.SEND_CITIES_SUCCESS
    }
}
export const sendCitiesError = () => {
    return {
        type: types.SEND_CITIES_ERROR
    }
}
export const sendCitiesResponse = (cities) => {
    return {
        type: types.SEND_CITIES_RESPONSE,
        payload: cities
    }
}
export const citiesReset = () => {
    return {
        type: types.RESET_CITIES,
    }
}