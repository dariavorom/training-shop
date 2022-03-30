export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id &&
            cartItem.sizes === cartItemToAdd.sizes &&
            cartItem.color === cartItemToAdd.color
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}
export const removeItemFromCart = (cartItems, [id, color, sizes, image]) => cartItems.filter(item => {
    return item.id === id ?
        (item.color !== color ||
            item.sizes !== sizes ||
            item.image !== image) :
        item.id !== id
});

export const incItemInCart = (cartItems, [id, color, sizes, image]) => {
    return cartItems.map(cartItem =>
        (cartItem.id === id && cartItem.color === color && cartItem.sizes === sizes && cartItem.image === image)
            ? {...cartItem, quantity: parseInt(cartItem.quantity + 1)}
            : cartItem
    );
}
export const decItemInCart = (cartItems, [id, color, sizes, image]) => {
    return cartItems.map(cartItem => {
            let qnt = cartItem.quantity;
            if (qnt > 1) {
                qnt = qnt - 1
            }
            return (cartItem.id === id && cartItem.color === color && cartItem.sizes === sizes && cartItem.image === image)
                ? {...cartItem, quantity: qnt}
                : cartItem
        }
    );
}
export const onChangeInput = (cartItems, [id, color, sizes, image, quantity]) => {
    return cartItems.map(cartItem => {
            if (cartItem.id === id && cartItem.color === color && cartItem.sizes === sizes && cartItem.image === image) {
                return quantity !== ''
                    ? {...cartItem, quantity: parseInt(quantity)} :
                    {...cartItem, quantity: quantity}
            } else {
                return cartItem
            }
        }
    );
}


