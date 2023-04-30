import React from 'react';
import Card from './Card';

const CardSection = () => {
    return (
        <section className="cards-wrapper" id="homeCards">
            <div className="container container--cards">
                <Card title="Info 1" desc="lorem ipsum" img="img.jpg" />
                <Card title="Info 2" desc="lorem ipsum" img="img.jpg" />
                <Card title="Info 3" desc="lorem ipsum" img="img.jpg" />
            </div>
        </section>
    );
};

export default CardSection;
