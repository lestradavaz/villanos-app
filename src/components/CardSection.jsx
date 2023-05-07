import React from 'react';
import SimpleCard from './SimpleCard';
import { objects } from '../constants';

const CardSection = () => {
    return (
        <section className="cards-wrapper" id="homeCards">
            <div className="container container--cards">
                {objects.homeCards.map((card) => (
                    <SimpleCard
                        key={card.id}
                        title={card.title}
                        desc={card.desc}
                        icon={card.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
