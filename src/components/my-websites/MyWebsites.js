import React from "react";

import ItemContent from "./carousel-item/ItemContent";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import blogImage from "./images/simple-blog.png";
import cvImage from "./images/cv.png";
import weatherImage from "./images/weather-app.jpg";

const MyWebsites = () => {
  return (
    <Container id="websites" className="pr-0 pl-0 section" as="section" fluid>
      <h3>My Websites</h3>
      <Carousel className="pt-0 pb-0">
        <Carousel.Item>
          <ItemContent
            name="The Weather App (01/2021)"
            liveLink="https://weather.florian-assante.com"
            description="A weather app created with EJS and Express"
            image={weatherImage}
          />
        </Carousel.Item>

        <Carousel.Item>
          <ItemContent
            name="Simple Blog"
            liveLink="https://desolate-earth-07791.herokuapp.com/"
            sourceLink="https://github.com/Raynnon/blog"
            description="Simple blog made with EJS, Express and MongoDB"
            image={blogImage}
          />
        </Carousel.Item>

        <Carousel.Item>
          <ItemContent
            name="CV"
            liveLink="http://localhost:3000/"
            sourceLink="https://github.com/Raynnon/cv"
            description="This is my personal CV made with React + React Bootstrap"
            image={cvImage}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MyWebsites;
