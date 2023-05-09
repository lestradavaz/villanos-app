import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="menu__wrapper">
                    <a href="/inicio">Inicio</a>
                    <a href="/nosotros">Nosotros</a>
                    <a href="/contacto">Contacto</a>
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
                <Socials />
            </div>
        </footer>
    );
};

export default Footer;
