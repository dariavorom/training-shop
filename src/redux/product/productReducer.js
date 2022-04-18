import {REQUEST_PRODUCT, LOAD_PRODUCT} from "./types";
import {SHOW_ERROR} from "../products/types";

const initialState = {
    product: {
        brand: "",
        category: "",
        discount: null,
        id: "",
        images: [],
        material: "",
        name: "",
        particulars: {},
        price: null,
        rating: null,
        reviews: [],
        sizes: []
    },
    isLoadingProduct: true,
    isErrorProduct: false
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PRODUCT:
            return {
                ...state, product: {
                    brand: "",
                    category: "",
                    discount: null,
                    id: "",
                    images: [],
                    material: "",
                    name: "",
                    particulars: {},
                    price: null,
                    rating: null,
                    reviews: [],
                    sizes: []
                }, isLoadingProduct: true, isErrorProduct: false
            }
        case LOAD_PRODUCT:
            return {...state, product: action.payload, isLoadingProduct: false, isErrorProduct: false}
        case SHOW_ERROR:
            return {...state, isErrorProduct: true, isLoadingProduct: false}
        default:
            return state
    }
}