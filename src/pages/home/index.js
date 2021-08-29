import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsList from '../../components/products-list';
import RenderIf from '../../components/render-if';
import { getFromArray } from '../../helpers';
import { StyledIntro } from './styled';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('/database.json')
            .then((response) => {
                setProducts(getFromArray(response.data, 8));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <StyledIntro>
                Bienvenidos a <b>La Jardinería</b>, aquí podrás encontrar todo tipo de plantas para tu hogar; sientete libre de
                explorar el sitio y selecciona la planta ideal para tu casa.
            </StyledIntro>

            <RenderIf isTrue={!!products.length}>
                <ProductsList products={products} />
            </RenderIf>

            {products.length == 0 && <div>Cargando...</div>}
        </div>
    );
};

export default HomePage;
