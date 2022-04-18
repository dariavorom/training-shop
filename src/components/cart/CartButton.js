import React from "react";
import {useDispatch, useSelector} from 'react-redux';

import {toggleCartOpen} from "../../redux/cart/actions";

import cart from "../header/assets/img/cart.svg";

const CartButton = () => {
    const dispatch = useDispatch();
    const {cartItems, isCartOpen} = useSelector(state => state.cart);
    const itemsCount = cartItems.length;
  return (
      <button data-test-id='cart-button' className='personal__item cart-btn' onClick={() => dispatch(toggleCartOpen(!isCartOpen))}>
          <span className='count'>{itemsCount}</span>
          <img src={cart} alt=""/>
      </button>
  )
}
export default CartButton;