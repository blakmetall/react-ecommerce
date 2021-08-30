import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CartProduct from '../cart-product';
import { CartListWrapper } from './styled';
import useCart from './hooks/useCart';

const selectCart = (state) => state.cart;

const CartList = ({ products }) => {
    const cart = useSelector(selectCart);

    const cartItems = useCart(products, cart);

    return (
        <CartListWrapper className="mb-3">
            {cartItems.map((product, index) => {
                return (
                    <CartProduct
                        key={index}
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
