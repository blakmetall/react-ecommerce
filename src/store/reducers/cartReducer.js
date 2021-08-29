import { cartTypes } from '../types';

const initialState = {
    itemsInCart: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case cartTypes.ADD_ITEM_TO_CART:
            console.log(action.payload);

            return {
                ...state,
            };
        case cartTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
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
