import React from "react";

import Project from "./project/Project";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import simbleBlogImage from "./images/simple-blog.jpg";
import faceDetectorImage from "./images/face-detector.jpg";
import roboFriendsImage from "./images/robofriends.png";
import tinDogImage from "./images/tindog.jpg";
import codePenImage from "./images/codepen.png";

const MyLaboratory = () => {
  return (
    <Container id="projects" className="bg-secondary" as="section" fluid>
      <h2>My laboratory</h2>
      <Row xl={5} lg={3} xs={2}>
        <Project
          name="Simple Blog"
          technologies="EJS, Express, MongoDB"
          image={simbleBlogImage}
          link="https://desolate-earth-07791.herokuapp.com/"
        />
        <Project
          name="Face detector"
          technologies="React & Express"
          image={faceDetectorImage}
        />
        <Project
          name="Robofriends"
          technologies="React"
          image={roboFriendsImage}
          link="https://sharp-davinci-00be4a.netlify.app/"
        />
        <Project
          name="Tindog"
          technologies="HTML, CSS, Bootstrap"
          image={tinDogImage}
          link="https://tindog.florian-assante.com/"
        />
        <Project
          name="CodePen Projects"
          technologies="Old projects made with Bootstrap"
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
