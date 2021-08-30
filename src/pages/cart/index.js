import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import CartList from '../../components/cart-list';
import useCartTotal from './hooks/useCartTotal';
import { sortByName } from '../../helpers';
import { CartWrapper, StyledTotalWrapper, StyledTotal } from './styled';

const selectCart = (state) => state.cart;

const CartPage = () => {
    const [products, setProducts] = useState([]);

    const cart = useSelector(selectCart);

    const cartTotal = useCartTotal(products, cart);

    useEffect(() => {
        axios
            .get('/database.json')
            .then((response) => {
                setProducts(response.data.sort(sortByName));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="pb-5" />
            <div className="pb-5" />

            {!!products.length && cart && !!cart.itemsInCart.length && cartTotal > 0 && (
                <CartWrapper>
                    <CartList products={products} cart={cart} />

                    <StyledTotalWrapper>
                        <StyledTotal className="mb-3">Total: ${cartTotal}</StyledTotal>
                        <Button variant="secondary" onClick={() => alert('Gracias por comprar en La Jardinería')}>
                            Pagar ahora
                        </Button>
                    </StyledTotalWrapper>
                </CartWrapper>
            )}

            {cart && cart.itemsInCart.length == 0 && <div>No hay productos agregados al carrito de compras.</div>}

            {products.length == 0 && <div>Cargando...</div>}
        </>
    );
};

export default CartPage;
