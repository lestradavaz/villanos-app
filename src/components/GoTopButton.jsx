import React, { useState } from 'react';

const GoTopButton = () => {
    const [show, setShow] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setShow(true);
        } else {
            setShow(false);
        }
    });

    return (
        <button
            onClick={() => scrollTo(0, 0)}
            className={`goTopBtn ${show ? 'show' : ''}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-up"
                width="84"
                height="84"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="18" y1="11" x2="12" y2="5" />
                <line x1="6" y1="11" x2="12" y2="5" />
            </svg>
        </button>
    );
};

export default GoTopButton;
