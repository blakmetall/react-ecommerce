import { cartTypes } from '../../types';
import store from '../../index';

const setItemsToCart = ({ id, amount }) => {
    const itemsInCart = store.getState().cart.itemsInCart;

    const cartItem = itemsInCart.find((item) => item.id == id);

    if (cartItem) {
        const newItemsInCart = itemsInCart.map((item) => {
            let temp = Object.assign({}, item);

            if (temp.id === id) {
                temp.amount = amount;
            }

            return temp;
        });

        const filteredItems = newItemsInCart.filter(function (obj) {
            return obj.id && obj.amount !== 0;
        });

        return { type: cartTypes.SET_ITEMS_TO_CART, payload: filteredItems };
    } else {
        const filteredItems = [...itemsInCart, { id, amount }];

        return { type: cartTypes.SET_ITEMS_TO_CART, payload: filteredItems };
    }
};

export default setItemsToCart;
