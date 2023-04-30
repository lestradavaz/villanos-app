import React from 'react';

const SimpleCard = ({ title, desc, icon }) => {
    return (
        <div className="card card--simple">
            <span className="material-icons">{icon}</span>
            <div className="card__info">
                <h3 className="card__title">{title}</h3>
                <p className="card__desc">{desc}</p>
                {/* <a className="btn" type="button">
                    Ver más
                </a> */}
            </div>
        </div>
    );
};

export default SimpleCard;
