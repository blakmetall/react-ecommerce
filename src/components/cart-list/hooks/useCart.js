export default function useCart(products, cart) {
    if (cart && cart.itemsInCart) {
        const filteredItems = products.filter((product) => {
            const cartItem = cart.itemsInCart.find((item) => item.id == product.id);

            if (cartItem && cartItem.id && cartItem.amount > 0) {
                return true;
            }

            return false;
        });

        // const cartItems = filteredItems.map((product) => {
        //     const cartItem = cart.itemsInCart.find((item) => item.id == product.id);

        //     let temp = Object.assign({}, product);
        //     temp.amount = cartItem.amount;

        //     return temp;
        // });

        return filteredItems;
    }

    return products;
}
