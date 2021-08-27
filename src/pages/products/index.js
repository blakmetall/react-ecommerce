import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <div className="mb-5">Products Page</div>

            <div>
                <Link to="/product/1">Product 1</Link>
            </div>
            <div>
                <Link to="/product/2">Product 2</Link>
            </div>
            <div>
                <Link to="/product/3">Product 3</Link>
            </div>
        </div>
    );
};

export default HomePage;
