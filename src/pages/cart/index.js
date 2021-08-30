import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import CartList from '../../components/cart-list';
import useCartTotal from './hooks/useCartTotal';
import { clearCart } from '../../store/actions/cart';
import { sortByName } from '../../helpers';
import { CartWrapper, StyledTotalWrapper, StyledTotal } from './styled';

const selectCart = (state) => state.cart;

const CartPage = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const cart = useSelector(selectCart);

    const cartTotal = useCartTotal(products, cart);

    const hasCartItems = !!products.length && cart && !!cart.itemsInCart.length;
    const cartIsEmpty = cart && cart.itemsInCart.length == 0;

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

            {hasCartItems && (
                <CartWrapper>
                    <CartList products={products} cart={cart} />

                    <StyledTotalWrapper>
                        <StyledTotal className="mb-3">Total: ${cartTotal}</StyledTotal>
                        <Button
                            variant="warning"
                            onClick={() => alert('Gracias por comprar en La Jardinería')}
                            className="mb-3 me-3"
                        >
                            Pagar ahora
                        </Button>
                        <Button variant="secondary" onClick={() => dispatch(clearCart())} className="mb-3">
                            Vaciar carrito de compras
                        </Button>
                    </StyledTotalWrapper>
                </CartWrapper>
            )}

            {cartIsEmpty && <div>No hay productos agregados al carrito de compras.</div>}

            {products.length == 0 && <div>Cargando...</div>}
        </>
    );
};

export default CartPage;
