import React from 'react';
import AppNavbar from './navbar';
import { StyledContainer, StyledIntroImage } from './styled';

const Layout = ({ children }) => {
    return (
        <div>
            <AppNavbar />

            <StyledIntroImage />

            <StyledContainer>{children}</StyledContainer>
        </div>
    );
};

export default Layout;
