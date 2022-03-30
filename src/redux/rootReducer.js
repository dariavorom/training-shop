import {combineReducers} from "redux";
import {cartReducer} from "./cart/cart.reducer";
import {productsReducer} from "./products/products.reducer";
import {productReducer} from "./product/productReducer";
import {subscribeReducer} from "./subscribe/reducer";
import {reviewReducer} from "./review/reducer";


export const RootReducer = combineReducers({
    cart: cartReducer,
    productsSlice: productsReducer,
    product: productReducer,
    subscribe: subscribeReducer,
    reviews: reviewReducer
});