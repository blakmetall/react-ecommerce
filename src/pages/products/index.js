import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsList from '../../components/products-list';
import RenderIf from '../../components/render-if';
import { sortByName } from '../../helpers';

const HomePage = () => {
    const [products, setProducts] = useState([]);

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
                <ProductsList products={products} />
            </RenderIf>

            {products.length == 0 && <div>Cargando...</div>}
        </>
    );
};

export default HomePage;
