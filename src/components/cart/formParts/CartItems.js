import remove from "../assets/remove.png";
import React from "react";

const CartItems = ({items, removeItem, decItem, incItem, onChange}) => {
    return (
        <div className={'cart__items cart-items'}>
            <div className="cart__items-wrapper">
                {items.map(({name, price, id, sizes, color, image, quantity}) => {
                    const itemPrice = (price * quantity).toFixed(2);
                    const generateId = id + '-' + sizes + '-' + color;
                    return (
                        <div data-test-id='cart-card' className={'cart__item'} key={generateId}>
                            <div className={'cart__item-img'}>
                                <img src={image} alt=""/>
                            </div>
                            <div className={'cart__item-content'}>
                                <div className={'cart__item-title'}>{name}</div>
                                <div className={'cart__item-chosen'}>{color}, {sizes}</div>
                                <div className={'cart__item-actions'}>
                                    <div className={'cart__item-count count'}>
                                        <span data-test-id='minus-product'
                                                className={`count__del ${quantity === 1 ? 'disabled' : null}`}
                                                onClick={() => {
                                                    decItem(id, color, sizes, image)
                                                }}/>
                                        <input type='text' className={'count__value'}
                                               value={quantity}
                                               onChange={(e) => onChange(id, color, sizes, image, e.target.value)}/>
                                        <span data-test-id='plus-product' className={'count__add'}
                                                onClick={() => incItem(id, color, sizes, image)}/>
                                    </div>
                                    <div className={'cart__item-price'}>$ {itemPrice}</div>
                                    <button data-test-id='remove-product' className="remove-item"
                                            onClick={() => removeItem(id, color, sizes, image)}>
                                        <img src={remove} alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default CartItems;