import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../../components/product';

const HomePage = () => {
    return (
        <div>
            <div className="mb-5">Products Page</div>

            <div>
                <Product />
            </div>
            <div>
                <Product />
            </div>
            <div>
                <Product />
            </div>
        </div>
    );
};

export default HomePage;
