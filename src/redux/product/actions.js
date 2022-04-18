import {LOAD_PRODUCT, REQUEST_PRODUCT} from "./types";

export function loadProduct(product) {
    return {
        type: LOAD_PRODUCT,
        payload: product
    }
}

export function requestProduct(id) {
    return {
        type: REQUEST_PRODUCT,
        payload: id
    }
}