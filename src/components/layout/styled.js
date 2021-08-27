import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

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
    color: #608556;
    margin-left: 25px;
    text-decoration: none;

    &:hover {
        color: #608556;
        text-decoration: underline;
    }

    @media (max-width: 991px) {
        margin-left: 0;
    }
`;

export { StyledContainer, StyledIntroImage, StyledNavLink };
