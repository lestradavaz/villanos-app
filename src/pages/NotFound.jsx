import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div id="notFound">
            <h5>404</h5>
            <span>Page not found.</span>
            <Link to="/inicio" className="btn">
                Volver a inicio
            </Link>
        </div>
    );
};

export default NotFound;
