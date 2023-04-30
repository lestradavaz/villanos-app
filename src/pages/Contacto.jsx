import React from 'react';

const Contacto = () => {
    return (
        <div className="contact" id="contact">
            <h3>Contactanos</h3>
            <h4>Completa la siguiente forma</h4>
            <form autoComplete="new-password">
                <input
                    type="text"
                    id="contactName"
                    placeholder="Nombre completo"
                    autoComplete="new-password"
                />
                <input
                    type="text"
                    id="contactEmail"
                    placeholder="Correo electronico"
                    autoComplete="new-password"
                />
                <input
                    type="text"
                    id="contactNumber"
                    placeholder="Número telefonico"
                    autoComplete="new-password"
                />
                <textarea id="contactMessage" placeholder="Mensaje"></textarea>
                <button className="btn" id="contactBtn" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contacto;
