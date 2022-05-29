import React from 'react';

import ItemContent from './ItemContent';
import Container from 'react-bootstrap/Container';

import backofficeImage from './images/mes-cadeaux-originaux-backoffice.jpg';
import organisemeImage from './images/organise-me.jpg';
import weatherImage from './images/weather-app.jpg';
import cadeauxOriginauxImage from './images/mes-cadeaux-originaux.jpg';

const MyWebsites = () => {
  return (
    <Container id="my-websites" className="pr-0 pl-0" as="section" fluid>
      <h2>My Websites</h2>
      <ItemContent
        name="Mes cadeaux originaux backoffice"
        imageAlt="mes-cadeaux-originaux-backoffice"
        liveLink="https://admin.mescadeauxoriginaux.com/"
        sourceLink="https://github.com/Raynnon/cadeaux-originaux"
        description="Backoffice made with React, Express.js and mongoDB"
        image={backofficeImage}
      />
      <ItemContent
        name="Mes cadeaux originaux"
        imageAlt="mes-cadeaux-originaux"
        liveLink="https://mescadeauxoriginaux.com"
        sourceLink="https://github.com/Raynnon/cadeaux-originaux"
        description="Affiliate site made with Next.js, Express.js and mongoDB"
        image={cadeauxOriginauxImage}
      />

      <ItemContent
        name="Organise Me"
        imageAlt="organise-me"
        liveLink="https://organiseme.florian-assante.com"
        sourceLinkFront="https://github.com/Raynnon/organiseme"
        sourceLinkBack="https://github.com/Raynnon/tasks-api"
        description="A task manager created with React, Express.js and MongoDB"
        image={organisemeImage}
      />

      <ItemContent
        name="The Weather App"
        imageAlt="weather-app"
        liveLink="https://weather.florian-assante.com"
        sourceLink="https://github.com/Raynnon/weather-app"
        description="A weather app created with EJS and Express.js using the Weatherbit API."
        image={weatherImage}
      />
    </Container>
  );
};

export default MyWebsites;
