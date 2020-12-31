import React from "react";

import ItemContent from "./carousel-item/ItemContent";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import blogImage from "./images/simple-blog.png";
import cvImage from "./images/cv.png";
import tindogImage from "./images/tindog.png";

const MyWebsites = () => {
  return (
    <Container id="websites" className="pr-0 pl-0 section" as="section" fluid>
      <h3>My Websites</h3>
      <Carousel className="pt-0 pb-0">
        <Carousel.Item>
          <ItemContent
            name="Tindog"
            liveLink="https://tindog.florian-assante.com/"
            sourceLink="https://github.com/Raynnon/tindog"
            description="Simple landing page made in HTML/CSS + Bootstrap"
            image={tindogImage}
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
