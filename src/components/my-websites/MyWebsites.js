import React from "react";

import ItemContent from "./ItemContent";
import Container from "react-bootstrap/Container";

import blogImage from "./images/simple-blog.jpg";
import cvImage from "./images/cv.jpg";
import weatherImage from "./images/weather-app.jpg";

const MyWebsites = () => {
  return (
    <Container className="pr-0 pl-0 section" as="section" fluid>
      <h2>My Websites</h2>
      <ItemContent
        name="The Weather App (01/2021)"
        imageAlt="weather-app"
        liveLink="https://weather.florian-assante.com"
        description="A weather app created with EJS and Express using the Weatherbit API."
        image={weatherImage}
      />

      <ItemContent
        name="Simple Blog (12/2020)"
        imageAlt="simple-blog"
        liveLink="https://desolate-earth-07791.herokuapp.com/"
        description="Simple blog made with EJS, Express and MongoDB from a Bootstrap template."
        image={blogImage}
      />

      <ItemContent
        name="CV (11/2020)"
        imageAlt="cv-florian-assante"
        liveLink="http://localhost:3000/"
        sourceLink="https://github.com/Raynnon/cv"
        description="This is my personal CV made with React + React Bootstrap"
        image={cvImage}
      />
    </Container>
  );
};

export default MyWebsites;
