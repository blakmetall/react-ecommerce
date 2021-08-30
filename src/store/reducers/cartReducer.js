import { cartTypes } from '../types';

const initialState = {
    itemsInCart: [],
};

const setItemsToCart = (itemsInCart, { id, amount }) => {
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
            return obj.amount !== 0;
        });

        return filteredItems;
    } else {
        return [...itemsInCart, { id, amount }];
    }
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case cartTypes.SET_ITEMS_TO_CART:
            const itemsInCart = setItemsToCart(state.itemsInCart, action.payload);

            console.log(itemsInCart);

            return {
                ...state,
                itemsInCart: itemsInCart,
            };
        case cartTypes.CLEAR_CART:
            return {
                ...state,
                ...initialState,
            };

        default:
            return state;
    }
}
