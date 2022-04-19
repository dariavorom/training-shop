import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeAllItems, toggleCartOpen} from "../../../redux/cart/actions";

export const CartOrderSuccess = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
    return (
        <>
            <div className='cart__order-result order-result'>
                <h4 className="order-result__title">Thank you<br/>for your order</h4>
                <p>Information about your order will appear in your e-mail.</p>
                <p>Our manager will call you back.</p>
            </div>
            <div className={'cart__bottom'}>
                <button
                    className="btn-dark"
                    onClick={() => {
                        dispatch(toggleCartOpen(!isCartOpen));
                        dispatch(removeAllItems());
                    }}>
                    back to shopping
                </button>
            </div>
        </>
    )
}