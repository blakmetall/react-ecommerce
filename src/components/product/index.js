import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    StyledContainer,
    StyledImage,
    StyledTitle,
    StyledDescription,
    StyledPrice,
    StyledViewBtn,
    StyledAddToCartBtn,
} from './styled';

const Product = ({ id, name, description, price, image }) => {
    const productUrl = '/product/' + id;

    return (
        <StyledContainer>
            <Link to={productUrl}>
                <StyledImage className="img-thumbnail" image={image} />
            </Link>

            <div class="d-flex justify-content-between">
                <StyledTitle to={productUrl}>{name}</StyledTitle>
                <StyledPrice>${price}</StyledPrice>
            </div>

            <StyledDescription>{description}</StyledDescription>

            <div class="d-flex justify-content-between">
                <StyledViewBtn className="btn btn-secondary" role="button" to={productUrl}>
                    Ver
                </StyledViewBtn>
                <StyledAddToCartBtn>Agregar al carrito</StyledAddToCartBtn>
            </div>
        </StyledContainer>
    );
};

Product.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
};

Product.defaultProps = {
    id: '',
    name: '',
    description: '',
    price: 0,
    image: '',
};

export default Product;
