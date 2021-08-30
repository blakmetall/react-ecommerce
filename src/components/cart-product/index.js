import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { isValidAmount } from '../../helpers';
import {
    StyledContainer,
    StyledImage,
    StyledTitle,
    StyledDescription,
    StyledPrice,
    StyledAddToCartBtn,
    StyledAmountChanger,
    StyledInputAmount,
} from './styled';
import { setItemsToCart } from '../../store/actions/cart';

const selectCart = (state) => state.cart;

const CartProduct = ({ id, name, description, price, image }) => {
    const [amount, setAmount] = useState(0);

    const dispatch = useDispatch();

    const cart = useSelector(selectCart);

    useEffect(() => {
        if (cart && cart.itemsInCart && cart.itemsInCart.length) {
            cart.itemsInCart.forEach((item) => {
                if (item.id == id) {
                    setAmount(item.amount);
                }
            });
        }

        // eslint-disable-next-line
    }, [cart]);

    const productUrl = '/product/' + id;

    const changeAmount = (e) => {
        const amount = e.target.value;

        if (isValidAmount(amount)) {
            setAmount(amount);
        }
    };

    const reduceAmount = () => {
        const newAmount = Number.parseInt(amount) - 1;

        if (isValidAmount(newAmount)) {
            setAmount(newAmount);
        }
    };

    const increaseAmount = () => {
        const newAmount = Number.parseInt(amount) + 1;

        if (isValidAmount(newAmount)) {
            setAmount(newAmount);
        }
    };

    const addItemsToCart = () => {
        dispatch(setItemsToCart({ amount, id }));
    };

    return (
        <StyledContainer>
            <Link to={productUrl}>
                <StyledImage className="img-thumbnail" image={image} />
            </Link>

            <div className="d-flex justify-content-between">
                <StyledTitle to={productUrl}>{name}</StyledTitle>
                <StyledPrice>${price}</StyledPrice>
            </div>

            <StyledDescription>{description}</StyledDescription>

            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <StyledAmountChanger onClick={reduceAmount}>-</StyledAmountChanger>
                    <StyledInputAmount type="text" value={amount} onChange={(e) => changeAmount(e)} />
                    <StyledAmountChanger onClick={increaseAmount}>+</StyledAmountChanger>
                </div>

                <StyledAddToCartBtn className="btn-sm" onClick={addItemsToCart}>
                    Actualizar carrito
                </StyledAddToCartBtn>
            </div>
        </StyledContainer>
    );
};

CartProduct.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
};

CartProduct.defaultProps = {
    id: '',
    name: '',
    description: '',
    price: 0,
    image: '',
};

export default CartProduct;
