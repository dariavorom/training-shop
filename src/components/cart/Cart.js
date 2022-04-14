import React from "react";

import {connect, useDispatch, useSelector} from 'react-redux';
import {
    incItem,
    decItem,
    removeItemById,
    onChangeInput,
    toggleCartOpen,
    removeAllItems
} from "../../redux/cart/actions";

import ErrorBoundary from "../error-boundry/ErrorBoundary";
import Order from "./Order";
import EmptyCart from "./EmptyCart";

import './cart.scss';
import close from './assets/close.png';

const Cart = ({items, total, removeItem, incItem, decItem, onChange}) => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
    const {orderComplete, orderError} = useSelector(state => state.cart.order);
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
                    {(items.length === 0 && !orderComplete && !orderError) && <EmptyCart/>}
                    <ErrorBoundary>
                        {(items.length !== 0) && <Order items={items} total={total}
                                                                           removeItem={removeItem}
                                                                           incItem={incItem} decItem={decItem}
                                                                           onChange={onChange}/>}
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    items: cartItems,
    total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0).toFixed(2)
});
const mapDispatchToProps = dispatch => ({
    removeItem: (id, color, sizes, image) => dispatch(removeItemById(id, color, sizes, image)),
    incItem: (id, color, sizes, image) => dispatch(incItem(id, color, sizes, image)),
    decItem: (id, color, sizes, image) => dispatch(decItem(id, color, sizes, image)),
    onChange: (id, color, sizes, image, quantity) => dispatch(onChangeInput(id, color, sizes, image, quantity)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
