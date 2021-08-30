import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsList from '../../components/products-list';
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

    const productsLoaded = !!products.length;

    return (
        <>
            <div className="pb-5" />
            <div className="pb-5" />

            {productsLoaded && <ProductsList products={products} />}

            {products.length == 0 && <div>Cargando...</div>}
        </>
    );
};

export default HomePage;
