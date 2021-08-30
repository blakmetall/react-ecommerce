import React, { lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductPage from './pages/product';
import CartPage from './pages/cart';

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route exact path="/products">
                <ProductsPage />
            </Route>

            <Route exact path="/product/:id">
                <ProductPage />
            </Route>

            <Route exact path="/cart">
                <CartPage />
            </Route>

            {/* default */}
            <Redirect to="/" />
        </Switch>
    );
};

export default AppRoutes;
