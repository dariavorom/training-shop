import {combineReducers} from "redux";
import {cartReducer} from "./cart.reducer";
import {appReducer} from "./app.reducer";
import {productReducer} from "./productReducer";


export const RootReducer = combineReducers({
    cart: cartReducer,
    productsSlice: appReducer,
    product: productReducer
});