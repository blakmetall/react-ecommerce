import { cartTypes } from '../../types';

const removeItemFromCart = (itemId) => ({
    type: cartTypes.REMOVE_ITEM_FROM_CART,
    payload: itemId,
});

export default removeItemFromCart;
