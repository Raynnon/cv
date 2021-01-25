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
          name="Tindog"
          technologies="HTML, CSS, Bootstrap"
          image={require("./images/tindog.jpg")}
          link="https://tindog.florian-assante.com/"
        />
        <Project
          name="Tea Cosy"
          technologies="HTML, CSS, Bootstrap"
          image={require("./images/tea-cozy.png")}
          link="https://codepen.io/Raynnon/pen/dyyQYEr"
        />
        <Project />
        <Project />
        <Project />
      </Row>
    </Container>
  );
};

export default MyLaboratory;
