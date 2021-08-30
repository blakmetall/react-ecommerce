import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const StyledContainer = styled.div`
    width: 100%;
    margin-bottom: 60px;

    @media (max-width: 767px) {
        width: 100%;
        max-width: 400px;
    }
`;

const StyledImage = styled.div.attrs((props) => {
    return {
        imageSrc: '/products/' + props.image,
    };
})`
    width: 120px;
    height: 120px;
    background-image: url(${(props) => props.imageSrc});
    background-size: cover;
    background-position: center center;
    margin-bottom: 20px;

    @media (max-width: 767px) {
        width: 100px;
        height: 100px;
    }
`;

const StyledTitle = styled(Link)`
    font-size: 20px;
    text-decoration: none;
`;

const StyledDescription = styled.p`
    font-size: 14px;
    padding-bottom: 15px;
`;

const StyledPrice = styled.div`
    color: #74a54c;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
    position: relative;
    top: 0px;
`;

const StyledAddToCartBtn = styled(Button)``;

const StyledAmountChanger = styled.div`
    font-weight: bold;
    font-size: 18px;
    padding: 0 5px;
    border: 1px solid white;

    &:hover {
        cursor: pointer;
    }
`;

const StyledInputAmount = styled.input`
    width: 50px;
    text-align: center;
    margin: 0 10px;
`;

const StyledCartRow = styled.div`
    width: 100%;
`;

export {
    StyledContainer,
    StyledImage,
    StyledTitle,
    StyledDescription,
    StyledPrice,
    StyledAddToCartBtn,
    StyledAmountChanger,
    StyledInputAmount,
    StyledCartRow,
};
