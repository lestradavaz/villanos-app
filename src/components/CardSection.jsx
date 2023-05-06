import React from 'react';
import Card from './Card';
import { objects } from '../constants';

const CardSection = () => {
    return (
        <section className="cards-wrapper" id="homeCards">
            <div className="container container--cards">
                {objects.homeCards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        desc={card.desc}
                        img={card.img}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
