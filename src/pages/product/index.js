import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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
import { StyledAddToCartWrapper, StyledCartAddedMsg } from '../../components/cart-product/styled';
import { setItemsToCart } from '../../store/actions/cart';

const selectCart = (state) => state.cart;

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [viewProduct, setViewProduct] = useState();
    const [amount, setAmount] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false);

    const dispatch = useDispatch();

    const cart = useSelector(selectCart);

    const { id } = useParams();

    useEffect(() => {
        axios
            .get('/database.json')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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

    useEffect(() => {
        const singleProduct = products.filter((item) => item.id == id);
        if (singleProduct.length) {
            setViewProduct(singleProduct[0]);
        }
    }, [id, products]);

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

        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 1500);
    };

    return (
        <StyledContainer>
            {viewProduct && (
                <div>
                    <div className="d-flex">
                        <div className="me-5">
                            <StyledImage className="img-thumbnail" image={viewProduct.image} />
                        </div>

                        <div>
                            <div className="d-flex justify-content-between">
                                <StyledTitle className="text-primary">{viewProduct.name}</StyledTitle>
                                <StyledPrice>${viewProduct.price}</StyledPrice>
                            </div>

                            <StyledDescription>{viewProduct.description}</StyledDescription>

                            <div className="d-flex justify-content-between" style={{ maxWidth: '300px' }}>
                                <div className="d-flex align-items-center">
                                    <StyledAmountChanger onClick={reduceAmount}>-</StyledAmountChanger>
                                    <StyledInputAmount type="text" value={amount} onChange={(e) => changeAmount(e)} />
                                    <StyledAmountChanger onClick={increaseAmount}>+</StyledAmountChanger>
                                </div>

                                <StyledAddToCartWrapper>
                                    <StyledAddToCartBtn className="btn-sm" onClick={addItemsToCart}>
                                        Agregar al carrito
                                    </StyledAddToCartBtn>
                                    <StyledCartAddedMsg isVisible={addedToCart}>Carrito actualizado</StyledCartAddedMsg>
                                </StyledAddToCartWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </StyledContainer>
    );
};

export default ProductPage;
