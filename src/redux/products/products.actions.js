import {REQUEST_PRODUCTS, LOAD_PRODUCTS, SHOW_ERROR} from "./products.types";

export function requestProducts() {
    return {
        type: REQUEST_PRODUCTS
    }
}

export function loadProducts(products) {
    return {
        type: LOAD_PRODUCTS,
        payload: products
    }
}

export function showError() {
    return {
        type: SHOW_ERROR,
    }
}
