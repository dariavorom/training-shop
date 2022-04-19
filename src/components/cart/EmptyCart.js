import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {toggleCartOpen} from "../../redux/cart/actions";

export const EmptyCart = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
    return (
        <div className={'cart-empty'}>
            <p>Sorry, your cart is empty</p>
            <button className="btn-dark" onClick={() => dispatch(toggleCartOpen(!isCartOpen))}>back to shopping</button>
        </div>
    )
}