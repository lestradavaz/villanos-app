import React from 'react';

const AboutUs = () => {
    return (
        <div className="aboutUs" id="aboutUs">
            <div className="wrapper">
                <h3>Sobre nosotros</h3>
                <h4>Conoce más sobre nuestra organización</h4>
                <p>
                    Como organización, nuestros objetivos son compartir las
                    bases y fundamentos de este deporte a nuestros jugadores y
                    procuramos siempre la mejora continua dentro del equipo.
                </p>
                <br />
                <p>
                    Buscamos mantener una excelente reputación dentro y fuera
                    del campo, siendo modelos a seguir en la comunidad.
                    Participamos frecuentemente en actividades sociales y
                    culturales en beneficio de nuestro entorno con la finalidad
                    de ser dignos representantes de nuestra comunidad.
                </p>
                <a href="#aboutCards" className="btn">
                    Sobre nuestro deporte
                </a>
            </div>
            <img src="./modelo_pagina.png" alt="player_img" />
        </div>
    );
};

export default AboutUs;
