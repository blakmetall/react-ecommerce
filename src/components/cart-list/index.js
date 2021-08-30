import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CartProduct from '../cart-product';
import useCartItems from './hooks/useCartItems';
import { CartListWrapper } from './styled';

const selectCart = (state) => state.cart;

const CartList = ({ products }) => {
    const cart = useSelector(selectCart);

    const cartItems = useCartItems(products, cart);

    return (
        <CartListWrapper className="mb-3">
            {cartItems.map((product) => {
                return (
                    <CartProduct
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                    />
                );
            })}
        </CartListWrapper>
    );
};

CartList.propTypes = {
    products: PropTypes.array,
};

CartList.defaultProps = {
    products: [],
};

export default CartList;
