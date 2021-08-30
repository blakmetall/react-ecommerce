export default function useItemsInCart(cart) {
    if (cart && cart.itemsInCart) {
        let items = 0;

        cart.itemsInCart.forEach((item) => {
            items += item.amount;
        });

        return items;
    }

    return 0;
}
