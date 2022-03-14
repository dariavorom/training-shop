import remove from "./assets/remove.png";

const CartItems = ({items, removeItem, decItem, incItem, onChange}) => {
    return (
        <div className={'cart__items'}>
            {items.map(({name, price, id, sizes, color, image, quantity}) => {
                const itemPrice = (price * quantity).toFixed(2);
                return (
                    <div data-test-id='cart-card' className={'cart__item'} key={id}>
                        <div className={'cart__item-img'}>
                            <img src={image} alt=""/>
                        </div>
                        <div className={'cart__item-content'}>
                            <div className={'cart__item-title'}>{name}</div>
                            <div className={'cart__item-chosen'}>{color}, {sizes}</div>
                            <div className={'cart__item-actions'}>
                                <div className={'cart__item-count count'}>
                                    <button data-test-id='minus-product'
                                            className={`count__del ${quantity === 1 ? 'disabled' : null}`}
                                            onClick={() => {
                                                decItem(id)
                                            }}/>
                                        <input type='text' className={'count__value'}
                                               value={quantity}
                                               onChange={(e) => onChange(id, e.target.value)}/>
                                    <button data-test-id='plus-product' className={'count__add'}
                                            onClick={() => incItem(id)}/>
                                </div>
                                <div className={'cart__item-price'}>$ {itemPrice}</div>
                                <button data-test-id='remove-product' className="remove-item"
                                        onClick={() => removeItem(id)}>
                                    <img src={remove} alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default CartItems;