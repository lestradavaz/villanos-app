import React from 'react';
import { SimpleCard } from '../components';

const AboutCards = () => {
    return (
        <div className="aboutCards" id="aboutCards">
            <div className="container">
                <h3>Nuestro deporte</h3>
                <h4>y sus fundamentos</h4>
            </div>
            <div className="cards-wrapper">
                <div className="container container--cards">
                    <SimpleCard
                        title="Lorem ipsum"
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A labore tenetur facilis nulla ut ullam architecto expedita maxime velit alias.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A labore tenetur facilis nulla ut ullam architecto expedita maxime velit alias."
                        icon="info"
                    />
                    <SimpleCard
                        title="Lorem ipsum"
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A labore tenetur facilis nulla ut ullam architecto expedita maxime velit alias.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A labore tenetur facilis nulla ut ullam architecto expedita maxime velit alias."
                        icon="info"
                    />
                    <SimpleCard
                        title="Lorem ipsum"
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A labore tenetur facilis nulla ut ullam architecto expedita maxime velit alias.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A labore tenetur facilis nulla ut ullam architecto expedita maxime velit alias."
                        icon="info"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutCards;
