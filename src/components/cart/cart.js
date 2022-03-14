import React, {useState} from "react";
import './cart.scss';
import close from './assets/close.png';
import {connect} from 'react-redux';
import {incItem, decItem, removeItemById, onChangeInput} from "../../redux/cart.actions";
import CartItems from "./cart.items";
import CartDelivery from "./cart.delivery";

const Cart = ({isCartOpen, toggleCartMode, items, total, removeItem, incItem, decItem, onChange}) => {
    return (
        <div data-test-id='cart' className={isCartOpen ? 'cart active' : 'cart'} onClick={toggleCartMode}>
            <div className="cart-wrapper" onClick={e => e.stopPropagation()}>
                <div className="cart__top">
                    <div className="cart__title">shopping cart</div>
                    <button className="cart__close-btn" onClick={toggleCartMode}>
                        <img src={close} alt=""/>
                    </button>
                </div>
                <div className="cart-content">
                    {items.length === 0 ? <EmptyCart toggleCartMode={toggleCartMode}/> :
                        <FullCart toggleCartMode={toggleCartMode} items={items} total={total} removeItem={removeItem}
                                  incItem={incItem} decItem={decItem} onChange={onChange}/>}
                </div>
            </div>

        </div>
    )
}
const FullCart = ({toggleCartMode, items, total, removeItem, incItem, decItem, onChange}) => {
    const [active, setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };
    return (
        <div className={'cart-full'}>
            <div className={'cart__header'}>
                <button className={`cart__header-item ${active === 0 ? 'active' : null}`} onClick={handleClick}
                        id={0}>Item in Cart
                </button>
                <button className={`cart__header-item ${active === 1 ? 'active' : null}`} onClick={handleClick}
                        id={1}>Delivery Info
                </button>
                <button className={`cart__header-item ${active === 2 ? 'active' : null}`} onClick={handleClick}
                        id={2}>Payment
                </button>
            </div>
            {active === 0 ? <CartItems items={items} removeItem={removeItem} incItem={incItem} decItem={decItem}
                                       onChange={onChange}/> :
                active === 1 ? <CartDelivery/> : null}
            <div className={'cart__bottom'}>
                <div className={'cart__total'}>
                    <span className="cart__total-text">Total</span>
                    <span className="cart__total-value">$ {total}</span>
                </div>
                <div className={'cart__btns'}>
                    <button className="btn-dark">further</button>
                    <button className="btn-light" onClick={toggleCartMode}>view cart</button>
                </div>
            </div>
        </div>
    )
}
const EmptyCart = ({toggleCartMode}) => {
    return (
        <div className={'cart-empty'}>
            <p>Sorry, your cart is empty</p>
            <button className="btn-dark" onClick={toggleCartMode}>back to shopping</button>
        </div>
    )
}
const mapStateToProps = ({cart: {cartItems}}) => ({
    items: cartItems,
    total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0).toFixed(2)
});
const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItemById(id)),
    incItem: id => dispatch(incItem(id)),
    decItem: id => dispatch(decItem(id)),
    onChange: (id, quantity) => dispatch(onChangeInput(id, quantity)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
