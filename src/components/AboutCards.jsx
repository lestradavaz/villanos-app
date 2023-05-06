import React from 'react';
import { SimpleCard } from '../components';
import { objects } from '../constants';

const AboutCards = () => {
    return (
        <div className="aboutCards" id="aboutCards">
            <div className="container">
                <h3>Nuestro deporte</h3>
                <h4>y sus fundamentos</h4>
            </div>
            <div className="cards-wrapper">
                <div className="container container--cards">
                    {objects.aboutUsCards.map((card) => (
                        <SimpleCard
                            key={card.id}
                            title={card.title}
                            desc={card.desc}
                            icon={card.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutCards;
