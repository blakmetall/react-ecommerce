import { cartTypes } from '../types';

const initialState = {
    itemsInCart: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case cartTypes.SET_ITEMS_TO_CART:
            return {
                ...state,
                itemsInCart: action.payload,
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
