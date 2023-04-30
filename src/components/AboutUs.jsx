import React from 'react';

const AboutUs = () => {
    return (
        <div className="aboutUs" id="aboutUs">
            <div className="wrapper">
                <h3>Sobre nosotros</h3>
                <h4>Conoce más sobre nuestra organización</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium quaerat maiores laboriosam veniam quibusdam
                    officia quidem ullam quia eum, suscipit alias consequuntur
                    et ipsum facilis placeat delectus iste dolorem quasi
                    asperiores nihil? Fugiat, molestias quisquam sequi magnam
                    amet saepe quod! Qui ea, tempora dolor quisquam doloremque
                    atque cumque. Quas, at?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor atque, dignissimos sint exercitationem deleniti omnis
                    perferendis cumque iure repellat? Explicabo sunt incidunt
                    inventore aliquam ex ratione suscipit eius sapiente
                    molestiae.
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
