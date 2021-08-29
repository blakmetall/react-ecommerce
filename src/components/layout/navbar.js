import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { StyledNavLink, StyledBrand } from './styled';

const AppNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <StyledBrand>La Jardinería</StyledBrand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <StyledNavLink to="/">Home</StyledNavLink>
                        <StyledNavLink to="/products">Products</StyledNavLink>
                        <StyledNavLink to="/cart">Cart</StyledNavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
