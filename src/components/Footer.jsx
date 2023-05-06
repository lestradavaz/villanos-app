import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';

const Footer = () => {
    return (
        <footer>
            <Socials />
            <div className="container">
                <div className="menu__wrapper">
                    <Link to="/inicio">Inicio</Link>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/contacto">Contacto</Link>
                </div>
                <div className="footer__info">
                    <span>Villanos Cancún 2023.</span>
                    <span>Derechos reservados</span>
                </div>
                <p>
                    Calle Fresno Mz 2 Lt 82 SM 336 <br />
                    Residencial arbolada <br />
                    +52 55 2727 0286
                </p>
            </div>
        </footer>
    );
};

export default Footer;
