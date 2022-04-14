import {useDispatch, useSelector} from "react-redux";
import {toggleCartOpen} from "../../redux/cart/actions";
import React from "react";

const EmptyCart = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
    return (
        <div className={'cart-empty'}>
            <p>Sorry, your cart is empty</p>
            <button className="btn-dark" onClick={() => dispatch(toggleCartOpen(!isCartOpen))}>back to shopping</button>
        </div>
    )
}
export default EmptyCart;