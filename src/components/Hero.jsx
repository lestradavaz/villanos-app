import React from 'react';

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <img src="./model.png" alt="hero_img" />
            <div className="hero__wrapper">
                <h2>
                    Villanos
                    <br />
                    <span>Football</span>
                </h2>
                <p>
                    Sitio oficial de la organización Villanos México, equipo
                    orgullosamente mexicano dedicado a la asesoría y
                    entrenamiento de equipos de futbol americano.
                </p>
                <a href="#homeCards" className="btn">
                    Conócenos
                </a>
            </div>
        </div>
    );
};

export default Hero;
