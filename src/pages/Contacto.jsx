import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ykt6xh6',
                'template_xpo47rk',
                form.current,
                'hmI0qrM_eRUImMGDs'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact" id="contact">
            <h3>Contactanos</h3>
            <h4>Completa la siguiente forma</h4>
            <form ref={form} onSubmit={sendEmail} autoComplete="new-password">
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
