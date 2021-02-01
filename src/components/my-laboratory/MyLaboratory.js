import React from "react";

import Project from "./project/Project";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import faceDetectorImage from "./images/face-detector.jpg";
import roboFriendsImage from "./images/robofriends.png";
import tinDogImage from "./images/tindog.jpg";
import codePenImage from "./images/codepen.png";

const MyLaboratory = () => {
  return (
    <Container
      id="projects"
      className="section coloured-section"
      as="section"
      fluid
    >
      <h3>My laboratory</h3>
      <Row xl={4} lg={3} xs={2}>
        <Project
          name="Face detector (10/2020)"
          technologies="Detect a face on a picure. React, Express and the clarifai API"
          image={faceDetectorImage}
        />
        <Project
          name="Robofriends (08/2020)"
          technologies="React"
          image={roboFriendsImage}
          link="https://sharp-davinci-00be4a.netlify.app/"
        />
        <Project
          name="Tindog (08/2020)"
          technologies="HTML, CSS, Bootstrap"
          image={tinDogImage}
          link="https://tindog.florian-assante.com/"
        />
        <Project
          name="CodePen Projects (2018/2019)"
          technologies="old projects made with Bootstrap"
          image={codePenImage}
          link="https://codepen.io/Raynnon"
        />
        <Project />
        <Project />
        <Project />
      </Row>
    </Container>
  );
};

export default MyLaboratory;
