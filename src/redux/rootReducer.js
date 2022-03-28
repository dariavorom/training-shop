import {combineReducers} from "redux";
import {cartReducer} from "./cart.reducer";
import {appReducer} from "./app.reducer";
import {productReducer} from "./productReducer";
import {subscribeReducer} from "./subscribe/reducer";
import {reviewReducer} from "./review/reducer";


export const RootReducer = combineReducers({
    cart: cartReducer,
    productsSlice: appReducer,
    product: productReducer,
    subscribe: subscribeReducer,
    reviews: reviewReducer
});