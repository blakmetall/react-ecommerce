export default function useCartItems(products, cart) {
    if (cart && cart.itemsInCart) {
        const cartItems = products.filter((product) => {
            const cartItem = cart.itemsInCart.find((item) => item.id == product.id);

            if (cartItem && cartItem.id && cartItem.amount > 0) {
                return true;
            }

            return false;
        });

        return cartItems;
    }

    return products;
}
