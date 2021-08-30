import React from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useItemsInCart from './hooks/useItemsInCart';
import { StyledNavLink, StyledBrand } from './styled';

const selectCart = (state) => state.cart;

const AppNavbar = () => {
    const cart = useSelector(selectCart);

    const itemsInCart = useItemsInCart(cart);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <StyledBrand>La Jardinería</StyledBrand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <StyledNavLink to="/">Home</StyledNavLink>
                        <StyledNavLink to="/products">Productos</StyledNavLink>
                        <StyledNavLink to="/cart">
                            Carrito
                            {itemsInCart > 0 && (
                                <Badge bg="primary" className="ms-2">
                                    {itemsInCart}
                                </Badge>
                            )}
                        </StyledNavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
