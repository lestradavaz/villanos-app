import React from 'react';

const Card = ({ title, desc, img, btn }) => {
    return (
        <div className="card">
            <img src={img} alt="card_img" className="card__img" />
            <div className="card__info">
                <h3 className="card__title">{title}</h3>
                <p className="card__desc">{desc}</p>
                {btn ? (
                    <a className="btn" type="button">
                        Ver más
                    </a>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default Card;
