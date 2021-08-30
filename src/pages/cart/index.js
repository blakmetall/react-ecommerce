import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CartList from '../../components/cart-list';
import RenderIf from '../../components/render-if';
import { sortByName } from '../../helpers';

const selectCart = (state) => state.cart;

const CartPage = () => {
    const [products, setProducts] = useState([]);

    const cart = useSelector(selectCart);

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

            <RenderIf isTrue={!!products.length}>
                <CartList products={products} cart={cart} />
            </RenderIf>

            {products.length == 0 && <div>Cargando...</div>}
        </>
    );
};

export default CartPage;
