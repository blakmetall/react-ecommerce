import { cartTypes } from '../../types';

const addItemToCart = (data) => ({
    type: cartTypes.ADD_ITEM_TO_CART,
    payload: data,
});

export default addItemToCart;
