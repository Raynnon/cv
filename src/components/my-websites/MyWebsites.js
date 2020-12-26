import React from "react";

import ItemContent from "./carousel-item/ItemContent";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import faceDetectorImage from "./images/face-detector.png";
import cvImage from "./images/cv.png";
import tindogImage from "./images/tindog.png";

const MyWebsites = () => {
  return (
    <Container id="websites" className="pr-0 pl-0 section" as="section" fluid>
      <h3>My Websites</h3>
      <Carousel className="pt-0 pb-0">
        <Carousel.Item>
          <ItemContent
            name="Face detector (currently in dev)"
            description="App which detects faces on an image with clarifaiAPI. Made with ReactJS, NodeJS and Express"
            image={faceDetectorImage}
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
        <Carousel.Item>
          <ItemContent
            name="Tindog"
            liveLink="https://tin-dog-bs.netlify.app/"
            sourceLink="https://github.com/Raynnon/tindog"
            description="Simple landing page made in HTML/CSS + Bootstrap"
            image={tindogImage}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MyWebsites;
