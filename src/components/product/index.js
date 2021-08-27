import React from 'react';
import { StyledImage, StyledTitle, StyledDescription, StyledPrice, StyledViewBtn, StyledAddToCartBtn } from './styled';

const Product = () => {
    return (
        <div>
            <div>
                <StyledImage />
                <StyledTitle>Product title</StyledTitle>
                <StyledDescription>Product description </StyledDescription>
                <StyledPrice>$10.00</StyledPrice>
                <StyledViewBtn />
                <StyledAddToCartBtn />
            </div>
        </div>
    );
};

export default Product;
