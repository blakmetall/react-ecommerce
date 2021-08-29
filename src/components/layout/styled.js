import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const StyledBrand = styled(Navbar.Brand)`
    font-weight: bold;
    color: #333;
`;

const StyledContainer = styled(Container)`
    padding-top: 50px;
`;

const StyledIntroImage = styled.div`
    width: 100%;
    height: 350px;
    background-size: cover;
    background-position: center center;
    background-image: url('./images/slide-plants.jpg');
`;

const StyledNavLink = styled(Link)`
    font-size: 17px;
    padding: 10px 0;
    margin-left: 35px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 991px) {
        margin-left: 0;
    }
`;

export { StyledContainer, StyledIntroImage, StyledNavLink, StyledBrand };
