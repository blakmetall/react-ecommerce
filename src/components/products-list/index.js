import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import { ProductsListWrapper } from './styled';

const ProductsList = ({ products }) => {
    return (
        <ProductsListWrapper className="d-flex justify-content-center justify-content-md-between mb-5">
            {products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                    />
                );
            })}
        </ProductsListWrapper>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array,
};

ProductsList.defaultProps = {
    products: [],
};

export default ProductsList;
