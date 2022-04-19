import React from "react";

import {useDispatch, useSelector} from 'react-redux';
import {removeAllItems, toggleCartOpen} from "../../redux/cart/actions";

import ErrorBoundary from "../errorBoundry/ErrorBoundary";
import {Order} from "./Order";
import {EmptyCart} from "./EmptyCart";

import './cart.scss';

import close from './assets/close.png';

export const Cart = () => {
    const dispatch = useDispatch();
    const {isCartOpen, cartItems} = useSelector(state => state.cart);
    const {orderComplete, orderError} = useSelector(state => state.cart.order);

    const total = cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0).toFixed(2);

    function handleCloseCart () {
        if (orderComplete) {
            dispatch(removeAllItems())
        }
        dispatch(toggleCartOpen(!isCartOpen))
    }
    return (
        <div data-test-id='cart' className='cart' onClick={() => dispatch(toggleCartOpen(!isCartOpen))}>
            <div className="cart-wrapper" onClick={e => e.stopPropagation()}>
                <div className="cart__top">
                    <div className="cart__title">shopping cart</div>
                    <button className="cart__close-btn" onClick={() => handleCloseCart()}>
                        <img src={close} alt=""/>
                    </button>
                </div>
                <div className="cart-content">
                    {(cartItems.length === 0 && !orderComplete && !orderError) && <EmptyCart/>}
                    <ErrorBoundary>
                        {(cartItems.length !== 0) && <Order items={cartItems} total={total}/>}
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    )
}
