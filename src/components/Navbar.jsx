import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <a href="/" className="header__logo">
                <img src="logo_vectorizado.png" alt="Logotipo" />
            </a>
            <input type="checkbox" id="toggler" />
            <label htmlFor="toggler">
                <i className="material-icons">menu</i>
            </label>
            <nav>
                <a href="/inicio">Inicio</a>
                <a href="/nosotros">Nosotros</a>
                <a href="/contacto">Contacto</a>
            </nav>
        </header>
    );
};

export default Navbar;
