import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const [success, setSuccess] = useState(false);

    var m = useRef(null);
    var form_name = useRef(null);
    var form_email = useRef(null);
    var form_number = useRef(null);
    var form_msg = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        if (
            form_email.current.value.length === 0 ||
            form_name.current.value.length === 0 ||
            form_number.current.value.length === 0 ||
            form_msg.current.value.length === 0
        ) {
            setSuccess(false);
            m.current.showModal();
        }

        emailjs
            .sendForm(
                'service_rljc8md',
                'template_uodx47h',
                e.target,
                'hmI0qrM_eRUImMGDs'
            )
            .then((r) => {
                setSuccess(true);
                m.current.showModal();
            })
            .catch(() => {
                setSuccess(false);
                m.current.showModal();
            });
    };

    return (
        <div className="contact" id="contact">
            <dialog ref={m} className="modal">
                {success ? (
                    <span>Enviado correctamente!</span>
                ) : (
                    <span>Error! Intente de nuevo</span>
                )}
                <button
                    className="btn"
                    onClick={() => {
                        m.current.close();
                        if (success) {
                            setSuccess(false);
                            location.reload();
                        }
                    }}
                >
                    OK
                </button>
            </dialog>
            <h3>Contactanos</h3>
            <h4>Completa la siguiente forma</h4>
            <form onSubmit={sendEmail} autoComplete="new-password">
                <input
                    type="text"
                    id="contactName"
                    placeholder="Nombre completo"
                    name="contact_name"
                    autoComplete="new-password"
                    required
                    ref={form_name}
                />
                <input
                    type="text"
                    id="contactEmail"
                    placeholder="Correo electronico"
                    name="contact_email"
                    autoComplete="new-password"
                    required
                    ref={form_email}
                />
                <input
                    type="text"
                    id="contactNumber"
                    placeholder="Número telefonico"
                    name="contact_number"
                    autoComplete="new-password"
                    required
                    ref={form_number}
                />
                <textarea
                    id="contactMessage"
                    placeholder="Mensaje"
                    name="contact_message"
                    required
                    ref={form_msg}
                ></textarea>
                <button className="btn" id="contactBtn" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contacto;
