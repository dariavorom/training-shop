import {combineReducers} from "redux";
import {reducer} from "./cart/reducer";
import {productsReducer} from "./products/products.reducer";
import {productReducer} from "./product/productReducer";
import {subscribeReducer} from "./subscribe/reducer";
import {reviewReducer} from "./review/reducer";


export const RootReducer = combineReducers({
    cart: reducer,
    productsSlice: productsReducer,
    product: productReducer,
    subscribe: subscribeReducer,
    reviews: reviewReducer,
});