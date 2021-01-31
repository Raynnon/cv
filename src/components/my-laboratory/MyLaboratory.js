import React from "react";

import Project from "./project/Project";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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
          name="Tindog (08/2020)"
          technologies="HTML, CSS, Bootstrap"
          image={require("./images/tindog.jpg")}
          link="https://tindog.florian-assante.com/"
        />
        <Project
          name="CodePen Projects (2018/2019)"
          technologies="old projects made with Bootstrap"
          image={require("./images/codepen.png")}
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
