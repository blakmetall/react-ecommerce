import { cartTypes } from '../../types';

const setItemsToCart = (data) => ({
    type: cartTypes.SET_ITEMS_TO_CART,
    payload: data,
});

export default setItemsToCart;
