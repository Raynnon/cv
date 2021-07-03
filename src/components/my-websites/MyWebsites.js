import React from "react";

import ItemContent from "./ItemContent";
import Container from "react-bootstrap/Container";

import organisemeImage from "./images/organise-me.jpg";
import cvImage from "./images/cv.jpg";
import weatherImage from "./images/weather-app.jpg";

const MyWebsites = () => {
  return (
    <Container id="my-websites" className="pr-0 pl-0" as="section" fluid>
      <h2>My Websites</h2>
      <ItemContent
        name="Organise Me (04/2021)"
        imageAlt="organise-me"
        liveLink="https://organiseme.florian-assante.com"
        sourceLinkFront="https://github.com/Raynnon/organiseme"
        sourceLinkBack="https://github.com/Raynnon/tasks-api"
        description="A task manager created with React, Express and MongoDB"
        image={organisemeImage}
      />

      <ItemContent
        name="The Weather App (01/2021)"
        imageAlt="weather-app"
        liveLink="https://weather.florian-assante.com"
        sourceLink="https://github.com/Raynnon/weather-app"
        description="A weather app created with EJS and Express using the Weatherbit API."
        image={weatherImage}
      />

      <ItemContent
        name="CV (05/2021)"
        imageAlt="cv-florian-assante"
        sourceLink="https://github.com/Raynnon/cv"
        description="This is my personal CV made with React + React Bootstrap"
        image={cvImage}
      />
    </Container>
  );
};

export default MyWebsites;
