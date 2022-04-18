import {combineReducers} from "redux";
import {cartReducer} from "./cart/cartReducer";
import {productsReducer} from "./products/productsReducer";
import {productReducer} from "./product/productReducer";
import {subscribeReducer} from "./subscribe/subscribeReducer";
import {reviewReducer} from "./review/reviewReducer";


export const RootReducer = combineReducers({
    cart: cartReducer,
    productsSlice: productsReducer,
    product: productReducer,
    subscribe: subscribeReducer,
    reviews: reviewReducer,
});